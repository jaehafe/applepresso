import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './KakaoMapPage.style';

const { kakao } = window;

function KakaoMapPage() {
  const navigate = useNavigate();
  const handleToBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };
    const map = new kakao.maps.Map(container, options);
  }, []);

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.HeaderWrapper>
          <S.HeaderTitleWrapper>
            <S.StyledBsArrowLeft onClick={handleToBack} />
            <S.HeaderTitle>주변 매장</S.HeaderTitle>
          </S.HeaderTitleWrapper>
        </S.HeaderWrapper>
      </S.HeaderContainer>
      <S.MapContainer id="map">123</S.MapContainer>
    </S.Container>
  );
}

export default KakaoMapPage;
