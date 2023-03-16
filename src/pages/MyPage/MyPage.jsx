import React, { useContext } from 'react';
import * as S from './MyPage.style';
import { LoginContext } from '../../contexts/LoginContextProvider';

function MyPage() {
  const { currentUser } = useContext(LoginContext);
  const {
    accessToken,
    user: { email, displayName, profileImg },
  } = JSON.parse(localStorage.getItem('BANA_USER'));

  const handleLogout = () => {};

  return (
    <S.Container>
      <S.HeaderWrapper>
        <S.HeaderLeft>
          <S.ProfileIMG src={profileImg} />
          <S.UsernameWrapper>
            <S.UserName>{displayName}님,</S.UserName>
            <S.UserHi>안녕하세요!</S.UserHi>
          </S.UsernameWrapper>
        </S.HeaderLeft>
        <S.StyledFiLogOut onClick={handleLogout} />
      </S.HeaderWrapper>
    </S.Container>
  );
}

export default MyPage;
