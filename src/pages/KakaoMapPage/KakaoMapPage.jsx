import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './KakaoMapPage.style';

const { kakao } = window;

function KakaoMapPage({ Lat = 37.5900707, Lng = 127.0553692 }) {
  const navigate = useNavigate();
  const handleToBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    mapScript();
  }, [Lat, Lng]);

  const mapScript = () => {
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(Lat, Lng),
      level: 5,
    };
    //map
    const map = new kakao.maps.Map(container, options);

    //마커가 표시 될 위치
    let markerPosition = new kakao.maps.LatLng(Lat, Lng);

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커를 지도 위에 표시
    marker.setMap(map);
  };

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
