import React from 'react';
import * as S from './GetAllStoreMapModal.style';

function GetAllStoreMapModal({ isOpenAllStoreModal, setIsOpenAllStoreModal }) {
  return (
    <>
      <S.Backdrop onClick={() => setIsOpenAllStoreModal(false)} />
      <S.Container>
        <S.HeaderContainer>
          <S.HeaderWrapper>
            <S.HeaderTitleWrapper>
              {/* <S.StyledBsArrowLeft onClick={handleToBack} /> */}
              <S.HeaderTitle>매장 전체</S.HeaderTitle>
            </S.HeaderTitleWrapper>
            <S.IconWrapper>
              <S.StyledAiOutlineClose onClick={() => setIsOpenAllStoreModal(false)} />
            </S.IconWrapper>
          </S.HeaderWrapper>
        </S.HeaderContainer>
        <S.MapContainer id="map"></S.MapContainer>
        <S.CurrentLocationButton>
          <S.StyledBiCurrentLocation />
        </S.CurrentLocationButton>
      </S.Container>
    </>
  );
}

export default GetAllStoreMapModal;
