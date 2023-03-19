import React from 'react';
import * as S from './DetailStoreModal.style';
import ReactDOM from 'react-dom';

function DetailStoreModal({ isOpenModal, setIsOpenModal }) {
  const handleCloseModal = () => {
    setIsOpenModal(false);
  };

  return ReactDOM.createPortal(
    <>
      <S.Backdrop onClick={handleCloseModal} />
      <S.Container>
        <S.ButtonWrapper>
          <S.CancelButton>취소</S.CancelButton>
          <S.SelectButton>선택</S.SelectButton>
        </S.ButtonWrapper>
      </S.Container>
    </>,
    document.getElementById('overlay-root')
  );
}

export default DetailStoreModal;
