import React, { useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import * as S from './MakingRequestModal.style';

function MakingRequestModal({
  makingRequestModal,
  setMakingRequestModal,
  makingRequestInput,
  setMakingRequestInput,
}) {
  const inputRef = useRef(null);

  useEffect(() => {
    if (makingRequestModal && inputRef.current) {
      inputRef.current.focus();
    }
  }, [makingRequestModal]);

  const handleMakingRequestInput = (text) => {
    setMakingRequestInput(text);
  };

  const handleAddMakingRequest = () => {
    setMakingRequestInput(makingRequestInput);
  };

  return ReactDOM.createPortal(
    <S.ModalContainer $makingRequestModal={makingRequestModal}>
      {makingRequestModal && (
        <S.ModalWrapper>
          <S.Title>제조 / 픽업 요청사항</S.Title>
          <S.Input
            type="text"
            max={50}
            placeholder="내용을 입력해주세요"
            ref={inputRef}
            onChange={handleMakingRequestInput}
          />
          <S.TipsWrapper>
            <S.StyledBsExclamationCircle />
            <S.Tips>바리스타가 메시지를 확인하지 못 할 수도 있습니다.</S.Tips>
          </S.TipsWrapper>
          <S.ButtonWrapper>
            <S.CancelButton>취소</S.CancelButton>
            <S.AddButton onClick={handleAddMakingRequest}>등록</S.AddButton>
          </S.ButtonWrapper>
        </S.ModalWrapper>
      )}
    </S.ModalContainer>,
    document.getElementById('overlay-root')
  );
}

export default MakingRequestModal;
