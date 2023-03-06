import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Login.style';

function SignUp() {
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <S.Container>
      <S.Header>
        <S.StyledBsArrowLeft onClick={handleGoBack} />
        <S.NavigateTitle>바나프레소 회원가입/로그인</S.NavigateTitle>
      </S.Header>
      <S.MainWrapper>
        어서오세요,
        <br />
      </S.MainWrapper>
      <S.Button>로그인</S.Button>
    </S.Container>
  );
}

export default SignUp;
