import React, { useEffect } from 'react';
import * as S from './DetailStoreModal.style';
import ReactDOM from 'react-dom';
import storeThumbnail from '../../assets/storeThumbnail.jpeg';

function DetailStoreModal({ isOpenModal, setIsOpenModal }) {
  const handleCloseModal = () => {
    setIsOpenModal(false);
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

  return ReactDOM.createPortal(
    <>
      <S.Backdrop onClick={handleCloseModal} />
      <S.Container>
        <S.ModalTop>
          <S.Title>매장 상세</S.Title>
          <S.Thumbnail src={storeThumbnail} />
        </S.ModalTop>
        <S.ModalHeroContainer>
          <S.ModalHeroWrapper>
            <S.StyledFiMapPin />
            <S.ModalHero>
              <S.HeroTitle>회기역사거리점</S.HeroTitle>
              <S.HeroSubtitle>서울특별시 동대문구 회기로 176</S.HeroSubtitle>
              <S.HeroMap>
                네이버 지도 보기 <S.StyledIoIosArrowForward />
              </S.HeroMap>
            </S.ModalHero>
          </S.ModalHeroWrapper>
          <S.ModalHeroWrapper>
            <S.StyledAiOutlineClockCircle />
            <S.ModalHero>
              <S.HeroTitle>주문 가능 시간</S.HeroTitle>
              <S.HeroSubtitle>07:00</S.HeroSubtitle>
            </S.ModalHero>
          </S.ModalHeroWrapper>
        </S.ModalHeroContainer>
        <S.ButtonWrapper>
          <S.CancelButton onClick={handleCloseModal}>취소</S.CancelButton>
          <S.SelectButton>선택</S.SelectButton>
        </S.ButtonWrapper>
      </S.Container>
    </>,
    document.getElementById('overlay-root')
  );
}

export default DetailStoreModal;
