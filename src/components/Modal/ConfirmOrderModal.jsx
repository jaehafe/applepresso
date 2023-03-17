import React, { useReducer } from 'react';
import ReactDOM from 'react-dom';
import * as S from './ConfirmOrderModal.style';

function ConfirmOrderModal({ onCloseModal, handleFinalPayment }) {
  const handleOrderApprove = () => {
    handleFinalPayment();
  };

  return ReactDOM.createPortal(
    <S.ModalContainer>
      <S.ModalWrapper>
        <S.Title>주문결제 확인</S.Title>
        <S.TipsWrapper>
          <S.StyledBsExclamationCircle />
          <S.Tips>정책상 결제 후에는 주문 취소가 불가합니다.</S.Tips>
        </S.TipsWrapper>
        <S.ButtonWrapper>
          <S.CancelButton onClick={onCloseModal}>취소하기</S.CancelButton>
          <S.AddButton onClick={handleOrderApprove}>결제하기</S.AddButton>
        </S.ButtonWrapper>
      </S.ModalWrapper>
    </S.ModalContainer>,
    document.getElementById('overlay-root')
  );
}

export default ConfirmOrderModal;
