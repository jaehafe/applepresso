import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import useOnClickOutside from '../../hooks/useOnClickOutside';
import * as S from './MakingRequestModal.style';

function MakingRequestModal({
  makingRequestModal,
  setMakingRequestModal,
  makingRequestInput,
  setMakingRequestInput,
}) {
  const [inputValue, setInputValue] = useState('');
  const inputRef = useRef(null);
  const ModalRef = useRef(null);

  useEffect(() => {
    if (makingRequestModal && inputRef.current) {
      inputRef.current.focus();
    }
  }, [makingRequestModal]);

  /** 등록 */
  const handleAddMakingRequest = () => {
    setMakingRequestInput(inputValue);
    setMakingRequestModal(false);
  };

  /** 취소 */
  const handleCancelModal = () => {
    setMakingRequestModal(false);
  };

  useOnClickOutside(ModalRef, () => {
    setMakingRequestModal(false);
  });

  return ReactDOM.createPortal(
    <S.ModalContainer ref={ModalRef} $makingRequestModal={makingRequestModal}>
      {makingRequestModal && (
        <S.ModalWrapper>
          <S.Title>제조 / 픽업 요청사항</S.Title>
          <S.Input
            type="text"
            maxLength={50}
            placeholder="내용을 입력해주세요"
            ref={inputRef}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <S.TipsWrapper>
            <S.StyledBsExclamationCircle />
            <S.Tips>바리스타가 메시지를 확인하지 못 할 수도 있습니다.</S.Tips>
          </S.TipsWrapper>
          <S.ButtonWrapper>
            <S.CancelButton onClick={handleCancelModal}>취소</S.CancelButton>
            <S.AddButton onClick={handleAddMakingRequest}>등록</S.AddButton>
          </S.ButtonWrapper>
        </S.ModalWrapper>
      )}
    </S.ModalContainer>,
    document.getElementById('overlay-root')
  );
}

export default MakingRequestModal;
