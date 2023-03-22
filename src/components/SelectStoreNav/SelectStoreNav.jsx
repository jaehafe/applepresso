import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { SelectedStoreContext } from '../../contexts/SelectedStoreProvider';
import * as S from './SelectStoreNav.style';

function SelectStoreNav({ ...props }) {
  const navigate = useNavigate();
  const { currentStore } = useContext(SelectedStoreContext);
  const navigateToSelectStore = () => {
    navigate('/storeInfo');
  };

  return (
    <S.CurrentStoreContainer top={props.top}>
      {currentStore ? (
        <>
          <S.StoreTitleWrapper>
            <S.StyledFiMapPin />
            <S.StoreTitle>{currentStore.name}</S.StoreTitle>
            <S.StoreDesc>메뉴를 표시 중입니다.</S.StoreDesc>
          </S.StoreTitleWrapper>
          <S.ChangeStoreButton onClick={navigateToSelectStore}>변경</S.ChangeStoreButton>
        </>
      ) : (
        <>
          <S.StoreTitleWrapper>
            <S.StyledFiMapPin />
            <S.StoreTitle>매장 선택 후</S.StoreTitle>
            <S.StoreDesc>메뉴주문이 가능합니다</S.StoreDesc>
          </S.StoreTitleWrapper>
          <S.ChangeStoreButton onClick={navigateToSelectStore}>선택</S.ChangeStoreButton>
        </>
      )}
    </S.CurrentStoreContainer>
  );
}

export default SelectStoreNav;
