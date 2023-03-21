import React, { useEffect } from 'react';
import useGetMenu from '../../../hooks/useGetMenu';
import MenuList from '../../MenuList/MenuList';
import * as S from './SearchMenuModal.style';

function SearchMenuModal({ isOpenSearchMenuModal, setIsOpenSearchMenuModal }) {
  const { data, loading, error } = useGetMenu('/menu');
  const coffeeData = data.filter((menu) => menu.tags.includes('coffee'));
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
  return (
    <>
      <S.Backdrop onClick={() => setIsOpenSearchMenuModal(false)} />
      <S.Container>
        <S.HeaderWrapper>
          <S.HeaderLeft>
            <S.StyledFiSearch />
            <S.HeaderSearchInput placeholder="메뉴명을 검색하세요." />
            <S.StyledAiOutlineCloseCircle />
          </S.HeaderLeft>
          <S.HeaderRight>
            <S.HeaderCancelButton onClick={() => setIsOpenSearchMenuModal(false)}>
              취소
            </S.HeaderCancelButton>
          </S.HeaderRight>
        </S.HeaderWrapper>
        <S.BodyContainer>
          <S.SearchResultCount>
            <S.Strong>'세트'</S.Strong>에 대한 검색결과가 8건이 있습니다.
          </S.SearchResultCount>
          <S.SearchResultContainer>
            <MenuList menus={data} />
          </S.SearchResultContainer>
          {/* <S.SearchHistoryContainer>
            <S.SearchHistoryList>
              <S.SearchHistoryTitle>123</S.SearchHistoryTitle>
              <S.StyledAiOutlineClose />
            </S.SearchHistoryList>
          </S.SearchHistoryContainer> */}
        </S.BodyContainer>
      </S.Container>
    </>
  );
}

export default SearchMenuModal;
