import React, { useContext, useEffect, useState } from 'react';
import * as S from './DetailStoreModal.style';
import ReactDOM from 'react-dom';
import { SelectedStoreContext } from '../../../contexts/SelectedStoreProvider';
import { useNavigate, useParams } from 'react-router-dom';
import KakaoMapPage from '../../../pages/KakaoMapPage/KakaoMapPage';

function DetailStoreModal({ store, isOpenModal, setIsOpenModal }) {
  const [isOpenMapModal, setIsOpenMapModal] = useState(false);

  const navigate = useNavigate();
  const { id: paramsId } = useParams();
  const { handleSelectedStore } = useContext(SelectedStoreContext);
  const {
    id,
    image,
    name,
    delivery_available,
    address,
    open_time,
    company_owned,
    distance,
    kakao_map,
    LatLng: { Lat, Lng },
  } = store;

  const handleCloseModal = () => {
    setIsOpenModal(false);
  };
  const handleKaokaoMap = () => {
    console.log('123');
    setIsOpenMapModal(true);
  };

  useEffect(() => {
    if (isOpenModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpenModal]);

  const handleSelectStore = () => {
    handleSelectedStore({ name, address, delivery_available, company_owned });
    setIsOpenModal(false);
  };

  return ReactDOM.createPortal(
    <>
      <S.Backdrop onClick={handleCloseModal} />
      <S.Container>
        <S.ModalTop>
          <S.Title>매장 상세</S.Title>
          <S.Thumbnail src={image} />
        </S.ModalTop>
        <S.ModalHeroContainer>
          <S.ModalHeroWrapper>
            <S.StyledFiMapPin />
            <S.ModalHero>
              <S.HeroTitle>{name}</S.HeroTitle>
              <S.HeroSubtitle>{address}</S.HeroSubtitle>
              <S.HeroMap href={kakao_map} target="_blank" rel="noopener noreferrer">
                네이버 지도 보기 <S.StyledIoIosArrowForward />
              </S.HeroMap>
            </S.ModalHero>
          </S.ModalHeroWrapper>
          <S.ModalHeroWrapper>
            <S.StyledAiOutlineClockCircle />
            <S.ModalHero>
              <S.HeroTitle>주문 가능 시간</S.HeroTitle>
              <S.HeroSubtitle>{open_time}</S.HeroSubtitle>
            </S.ModalHero>
          </S.ModalHeroWrapper>
        </S.ModalHeroContainer>
        <S.ButtonWrapper>
          <S.CancelButton onClick={handleCloseModal}>취소</S.CancelButton>
          <S.SelectButton onClick={handleSelectStore}>선택</S.SelectButton>
        </S.ButtonWrapper>
        <S.KakaoMapSearch onClick={handleKaokaoMap}>
          <S.StyledMdOutlineGpsFixed />
        </S.KakaoMapSearch>
      </S.Container>
      {isOpenMapModal && (
        <KakaoMapPage
          title={name}
          Lat={Lat}
          Lng={Lng}
          setIsOpenMapModal={setIsOpenMapModal}
        />
      )}
    </>,
    document.getElementById('overlay-root')
  );
}

export default DetailStoreModal;
