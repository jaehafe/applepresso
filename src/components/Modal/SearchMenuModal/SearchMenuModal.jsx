import React, { useEffect, useState } from 'react';
import { useDebounce } from '../../../hooks/useDebounce';
import useGetMenu from '../../../hooks/useGetMenu';
import MenuList from '../../MenuList/MenuList';
import * as S from './SearchMenuModal.style';

function SearchMenuModal({ isOpenSearchMenuModal, setIsOpenSearchMenuModal }) {
  const { data, loading, error } = useGetMenu('/menu');
  // console.log('data', data);
  // const coffeeData = data.filter((menu) => menu.tags.includes('coffee'));
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleChange = (e) => {
    setSearchValue(e.target.value);
    // console.log('searchValue', searchValue);
  };

  const debouncedSearchValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (debouncedSearchValue) {
      fetchSearchMenuName(debouncedSearchValue);
    }
  }, [debouncedSearchValue]);

  const fetchSearchMenuName = async (searchValue) => {
    const results = data.filter((item) => item.title.includes(searchValue));
    setSearchResults(results);
  };
  console.log('searchResults', searchResults);

  useEffect(() => {
    if (isOpenSearchMenuModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpenSearchMenuModal]);

  const handleDisplayMenuWithThumbnail = (id) => {
    <>
      <S.SearchResultCount>
        <S.Strong>'{searchValue}'</S.Strong>에 대한 검색결과가 8건이 있습니다.
      </S.SearchResultCount>
      <S.SearchResultContainer>
        <MenuList menus={fetchSearchMenuName} />
      </S.SearchResultContainer>
    </>;
  };

  return (
    <>
      <S.Backdrop onClick={() => setIsOpenSearchMenuModal(false)} />
      <S.Container>
        <S.HeaderWrapper>
          <S.HeaderLeft>
            <S.StyledFiSearch />
            <S.HeaderSearchInput
              placeholder="메뉴명을 검색하세요."
              value={searchValue}
              onChange={handleChange}
            />
            <S.StyledAiOutlineCloseCircle />
          </S.HeaderLeft>
          <S.HeaderRight>
            <S.HeaderCancelButton onClick={() => setIsOpenSearchMenuModal(false)}>
              취소
            </S.HeaderCancelButton>
          </S.HeaderRight>
        </S.HeaderWrapper>
        <S.BodyContainer>
          {searchValue ? (
            <S.SearchResultContainer>
              <S.SearchResultMenuNameWrapper>
                {searchResults.map((menu) => (
                  <S.SearchResultMenuName
                    key={menu.id}
                    onClick={() => handleDisplayMenuWithThumbnail(menu.id)}
                  >
                    {menu.title}
                  </S.SearchResultMenuName>
                ))}
              </S.SearchResultMenuNameWrapper>
            </S.SearchResultContainer>
          ) : (
            <S.SearchHistoryContainer>
              <S.SearchHistoryList>
                <S.SearchHistoryTitle>localStorage</S.SearchHistoryTitle>
                <S.StyledAiOutlineClose />
              </S.SearchHistoryList>
            </S.SearchHistoryContainer>
          )}
        </S.BodyContainer>
      </S.Container>
    </>
  );
}

export default SearchMenuModal;
