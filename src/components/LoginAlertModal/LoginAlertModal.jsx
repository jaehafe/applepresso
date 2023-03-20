import React, { useEffect } from 'react';
import * as S from './LoginAlertModal.style';
import ReactDOM from 'react-dom';
import { Link, useNavigate } from 'react-router-dom';

function LoginAlertModal({ isOpenLoginModal, setIsOpenLoginModal }) {
  const navigate = useNavigate();
  const handleNavigateToLogin = () => {
    navigate('/login');
    setIsOpenLoginModal(false);
  };
  const handleCloseModal = () => {
    setIsOpenLoginModal(false);
  };

  useEffect(() => {
    if (isOpenLoginModal) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpenLoginModal]);

  return ReactDOM.createPortal(
    <>
      <S.Backdrop onClick={handleCloseModal} />
      <S.Container>
        <S.ModalTop>
          <S.Title>로그인 알림</S.Title>
        </S.ModalTop>
        <S.ModalHeroContainer>
          <S.ModalHeroWrapper>
            <S.StyledAiOutlineSmile />
            <S.ModalHero>
              <S.HeroTitle>로그인 후 이용이 가능합니다.</S.HeroTitle>
              <S.HeroSubtitle>로그인 후 더 다양한 혜택을 누려보세요</S.HeroSubtitle>
            </S.ModalHero>
          </S.ModalHeroWrapper>
        </S.ModalHeroContainer>
        <S.ButtonWrapper>
          <S.CancelButton onClick={handleCloseModal}>취소</S.CancelButton>
          {/* <Link to="/login"> */}
          <S.SelectButton onClick={handleNavigateToLogin}>
            로그인 하러 가기
          </S.SelectButton>
          {/* </Link> */}
        </S.ButtonWrapper>
      </S.Container>
    </>,
    document.getElementById('overlay-root')
  );
}

export default LoginAlertModal;
