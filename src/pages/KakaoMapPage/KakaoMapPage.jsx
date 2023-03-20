import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './KakaoMapPage.style';

const { kakao } = window;

function KakaoMapPage({ Lat = 37.5900707, Lng = 127.0553692, title, setIsOpenMapModal }) {
  const navigate = useNavigate();
  const handleToBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    mapScript();
  }, [Lat, Lng, title]);

  const mapScript = () => {
    let container = document.getElementById('map');
    let options = {
      center: new kakao.maps.LatLng(Lat, Lng),
      level: 5,
    };
    //map
    const map = new kakao.maps.Map(container, options);

    // 마커를 생성
    let marker = new kakao.maps.Marker({
      //마커가 표시 될 위치
      position: new kakao.maps.LatLng(Lat, Lng),
    });
    // 마커에 표시할 인포윈도우를 생성
    const infowindow = new kakao.maps.InfoWindow({
      content: title, // 인포윈도우에 표시할 내용
    });

    // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록
    // 이벤트 리스너로는 클로저를 만들어 등록
    // 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록
    kakao.maps.event.addListener(
      marker,
      'mouseover',
      makeOverListener(map, marker, infowindow)
    );
    kakao.maps.event.addListener(marker, 'mouseout', makeOutListener(infowindow));

    function makeOverListener(map, marker, infowindow) {
      return function () {
        infowindow.open(map, marker);
      };
    }

    // 인포윈도우를 닫는 클로저를 만드는 함수
    function makeOutListener(infowindow) {
      return function () {
        infowindow.close();
      };
    }
    // 마커를 지도 위에 표시
    marker.setMap(map);
  };

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.HeaderWrapper>
          <S.HeaderTitleWrapper>
            {/* <S.StyledBsArrowLeft onClick={handleToBack} /> */}
            <S.HeaderTitle>{title}</S.HeaderTitle>
          </S.HeaderTitleWrapper>
          <S.IconWrapper>
            <S.StyledAiOutlineClose onClick={() => setIsOpenMapModal(false)} />
          </S.IconWrapper>
        </S.HeaderWrapper>
      </S.HeaderContainer>
      <S.MapContainer id="map"></S.MapContainer>
    </S.Container>
  );
}

export default KakaoMapPage;
