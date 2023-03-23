import React, { useEffect, useState } from 'react';
import { useDebounce } from '../../../hooks/useDebounce';
import useGetMenu from '../../../hooks/useGetMenu';
import Loading from '../../Loading.jsx/Loading';
import MenuList from '../../MenuList/MenuList';
import * as S from './SearchMenuModal.style';

function SearchMenuModal({ isOpenSearchMenuModal, setIsOpenSearchMenuModal }) {
  const { data, loading, error, refetchData } = useGetMenu('/menu');
  const [searchValue, setSearchValue] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [isShowResultsWithThumbnail, setIsShowResultsWithThumbnail] = useState(false);

  const handleChangeInputValue = (e) => {
    setIsShowResultsWithThumbnail(false);
    setSearchValue(e.target.value);
  };

  const handleDeleteInputValue = () => {
    setSearchValue('');
    setIsShowResultsWithThumbnail(false);
  };

  const handleSearchMenuName = () => {
    setIsShowResultsWithThumbnail(true);
  };

  const debouncedSearchValue = useDebounce(searchValue, 500);

  useEffect(() => {
    if (debouncedSearchValue) {
      fetchSearchMenuName(debouncedSearchValue);
    }
  }, [debouncedSearchValue]);

  const fetchSearchMenuName = async (searchValue) => {
    const results = data?.filter((item) => item.title.includes(searchValue));
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

  const handleDisplayMenuWithThumbnail = () => {
    setIsShowResultsWithThumbnail(true);
    const results = data?.filter((item) => item.title.includes(searchValue));
    setSearchResults(results);
  };

  // if (loading) {
  //   return <Loading />;
  // }

  return (
    <>
      <S.Backdrop onClick={() => setIsOpenSearchMenuModal(false)} />
      <S.Container>
        {/* error boundary */}
        {error && (
          <S.ButtonContainer>
            <S.TitleWrapper>
              <S.RetryTitle>요청사항을 처리하는데 실패했습니다.</S.RetryTitle>
              <S.RetrySubtitle>잠시 후 다시 시도해주세요</S.RetrySubtitle>
            </S.TitleWrapper>
            <S.RetryButton
              onClick={() => {
                refetchData();
              }}
            >
              다시 시도하기
            </S.RetryButton>
          </S.ButtonContainer>
        )}
        {/*  */}
        <S.HeaderWrapper>
          <S.HeaderLeft>
            <S.StyledFiSearch />
            <S.HeaderSearchInput
              placeholder="메뉴명을 검색하세요."
              value={searchValue}
              onChange={handleChangeInputValue}
            />
            <S.StyledAiOutlineCloseCircle onClick={handleDeleteInputValue} />
          </S.HeaderLeft>
          <S.HeaderRight>
            <S.HeaderSearchButton onClick={handleDisplayMenuWithThumbnail}>
              검색
            </S.HeaderSearchButton>
            <S.HeaderCancelButton onClick={() => setIsOpenSearchMenuModal(false)}>
              취소
            </S.HeaderCancelButton>
          </S.HeaderRight>
        </S.HeaderWrapper>
        <S.BodyContainer>
          {isShowResultsWithThumbnail ? (
            <>
              <S.SearchResultCount>
                <S.Strong>'{searchValue}'</S.Strong>에 대한 검색결과가{' '}
                {searchResults.length}
                건이 있습니다.
              </S.SearchResultCount>
              <S.SearchResultContainer>
                <MenuList menus={searchResults} />
              </S.SearchResultContainer>
            </>
          ) : (
            <>
              {searchValue ? (
                <S.SearchResultContainer>
                  <S.SearchResultMenuNameWrapper>
                    {searchResults.map((menu) => (
                      <S.SearchResultMenuName
                        key={menu.id}
                        onClick={handleSearchMenuName}
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
            </>
          )}
        </S.BodyContainer>
      </S.Container>
    </>
  );
}

export default SearchMenuModal;
