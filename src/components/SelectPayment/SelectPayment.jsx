import React from 'react';
import * as S from './SelectPayment.style';
import { useNavigate } from 'react-router-dom';
import kakaoPayment from '../../assets/kakaoPayment.jpeg';

function SelectPayment() {
  const navigate = useNavigate();
  const handleToBack = () => {
    navigate(-1);
  };
  return (
    <S.Container>
      <S.HeaderContainer>
        <S.HeaderWrapper>
          <S.HeaderTitleWrapper>
            <S.StyledBsArrowLeft onClick={handleToBack} />
            <S.HeaderTitle>결제수단 선택</S.HeaderTitle>
          </S.HeaderTitleWrapper>
        </S.HeaderWrapper>
      </S.HeaderContainer>
      <S.BodyContainer>
        <S.PaymentContainer>
          <S.PaymentIMGWrapper>
            <S.PaymentIMG src={kakaoPayment} title="kakao pay" />
          </S.PaymentIMGWrapper>
        </S.PaymentContainer>
        <S.TipsWrapper>
          <S.TipsTitle>결제수단은 카카오 페이만 지원됩니다.</S.TipsTitle>
          <S.TipsSubtitle>추후 더 많은 결제수단을 지원하겠습니다.</S.TipsSubtitle>
        </S.TipsWrapper>
      </S.BodyContainer>
      <S.ButtonContainer onClick={handleToBack}>확인</S.ButtonContainer>
    </S.Container>
  );
}

export default SelectPayment;
