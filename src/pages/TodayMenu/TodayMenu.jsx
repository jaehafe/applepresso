import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './TodayMenu.style';

function TodayMenu() {
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
            <S.HeaderTitle>오늘의 메뉴</S.HeaderTitle>
          </S.HeaderTitleWrapper>
        </S.HeaderWrapper>
      </S.HeaderContainer>
    </S.Container>
  );
}

export default TodayMenu;
