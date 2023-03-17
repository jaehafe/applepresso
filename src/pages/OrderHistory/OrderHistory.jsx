import React from 'react';
import * as S from './OrderHistory.style';
import { useNavigate } from 'react-router-dom';

function OrderHistory() {
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
            <S.HeaderTitle>주문내역</S.HeaderTitle>
          </S.HeaderTitleWrapper>
        </S.HeaderWrapper>
      </S.HeaderContainer>
      {/*  */}
      <S.SelectContainer>
        <S.SetDateContainer>
          <S.DateWrapper>
            <S.StyledAiOutlineCalendar />
            <S.Date>2023.02.18 ~ 2023.03.18</S.Date>
          </S.DateWrapper>
        </S.SetDateContainer>
      </S.SelectContainer>
    </S.Container>
  );
}

export default OrderHistory;
