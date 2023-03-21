import React, { useEffect, useState } from 'react';
import * as S from './KakaoMapModal.style';

const { kakao } = window;

function KakaoMapModal({
  Lat = 37.5900707,
  Lng = 127.0553692,
  title,
  setIsOpenMapModal,
}) {
  const [mapInstance, setMapInstance] = useState(null);

  useEffect(() => {
    mapScript();
  }, [Lat, Lng, title]);

  function displayMarker(locPosition, message) {
    if (!mapInstance) return;
    // const container = document.getElementById('map');
    // const options = {
    //   center: new kakao.maps.LatLng(Lat, Lng),
    //   level: 5,
    // };
    // //map
    // let map = new kakao.maps.Map(container, options);
    // 마커를 생성합니다
    const marker = new kakao.maps.Marker({
      map: mapInstance,
      position: locPosition,
    });

    const iwContent = message, // 인포윈도우에 표시할 내용
      iwRemoveable = true;

    // 인포윈도우를 생성합니다
    const infowindow = new kakao.maps.InfoWindow({
      content: iwContent,
      removable: iwRemoveable,
    });

    // 인포윈도우를 마커위에 표시합니다
    infowindow.open(mapInstance, marker);

    // 지도 중심좌표를 접속위치로 변경합니다
    mapInstance.setCenter(locPosition);
  }

  const mapScript = () => {
    const container = document.getElementById('map');
    const options = {
      center: new kakao.maps.LatLng(Lat, Lng),
      level: 5,
    };
    //map
    const map = new kakao.maps.Map(container, options);
    setMapInstance(map);

    const imageSrc =
      'https://play-lh.googleusercontent.com/PmY6TGbSTUBZkEZRQp5_h2IRw87KXL9iZoQ_FiZW0ve4U5ppt2ArK0PMKMy1X3LHVA=w480-h960-rw';
    const imageSize = new kakao.maps.Size(40, 40); // 마커이미지의 크기입니다
    const imageOption = { offset: new kakao.maps.Point(27, 69) }; //
    const markerImage = new kakao.maps.MarkerImage(imageSrc, imageSize, imageOption);

    // 마커를 생성
    const marker = new kakao.maps.Marker({
      //마커가 표시 될 위치
      position: new kakao.maps.LatLng(Lat, Lng),
      image: markerImage,
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

  const getCurrentLocation = () => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(function (position) {
        const lat = position.coords.latitude, // 위도
          lon = position.coords.longitude; // 경도

        const locPosition = new kakao.maps.LatLng(lat, lon), // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
          message = '<div style="padding:5px;">여기에 계신가요?!</div>'; // 인포윈도우에 표시될 내용입니다

        // 마커와 인포윈도우를 표시합니다
        displayMarker(locPosition, message);
      });
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

      const locPosition = new kakao.maps.LatLng(33.450701, 126.570667),
        message = 'geolocation을 사용할수 없어요..';

      displayMarker(locPosition, message);
    }
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
      <S.CurrentLocationButton onClick={getCurrentLocation}>
        <S.StyledBiCurrentLocation />
      </S.CurrentLocationButton>
    </S.Container>
  );
}

export default KakaoMapModal;
