import React, { useContext } from 'react';
import * as S from './MyPage.style';
import { LoginContext } from '../../contexts/LoginContextProvider';
import { Link, useNavigate } from 'react-router-dom';

const HeaderNav = [
  { title: '카드 관리', navigate: '/selectPayment', icons: <S.StyledBsCreditCard /> },
  { title: '설정', navigate: '/main/home', icons: <S.StyledRiListSettingsLine /> },
  { title: '알림', navigate: '/main/home', icons: <S.StyledBiBell /> },
  { title: '1:1 문의', navigate: '/main/home', icons: <S.StyledBsChatDots /> },
];

const HeroNav = [
  {
    title: '간편주문',
    navigate: '/easyOrder',
    icons: <S.StyledFiBook />,
    directionIcon: <S.StyledIoIosArrowForward />,
  },
  {
    title: '주문내역',
    navigate: '/orderHistory',
    icons: <S.StyledIoReceiptOutline />,
    directionIcon: <S.StyledIoIosArrowForward />,
  },
  {
    title: '약관 및 정책',
    navigate: '/main/home',
    icons: <S.StyledBsShieldCheck />,
    directionIcon: <S.StyledIoIosArrowDown />,
  },
  {
    title: '매장 정보',
    navigate: '/main/home',
    icons: <S.StyledBiStoreAlt />,
    directionIcon: <S.StyledIoIosArrowForward />,
  },
];

function MyPage() {
  const navigate = useNavigate();
  const { currentUser, logout } = useContext(LoginContext);

  const handleLogout = () => {
    logout();
  };

  const navigateToLoginPage = () => {
    navigate('/');
  };

  return (
    <S.Container>
      <S.HeaderWrapper>
        <S.HeaderLeft>
          {currentUser ? (
            <>
              <S.ProfileIMG src={currentUser.user.profileImg} />
              <S.UsernameWrapper>
                <S.UserName>{currentUser.user.displayName}님,</S.UserName>
                <S.UserHi>안녕하세요!</S.UserHi>
              </S.UsernameWrapper>
            </>
          ) : (
            <S.UserHi>로그인 후 이용하실 수 있습니다.</S.UserHi>
          )}
        </S.HeaderLeft>

        {currentUser ? (
          <S.StyledFiLogOut onClick={handleLogout} />
        ) : (
          <S.StyledFiLogIn onClick={navigateToLoginPage} />
        )}
      </S.HeaderWrapper>
      <S.HeaderNav>
        {HeaderNav.map((items) => {
          const { title, navigate, icons } = items;
          return (
            <Link to={navigate} key={title}>
              <S.HeaderList>
                {icons}
                <S.HeaderListTitle>{title}</S.HeaderListTitle>
              </S.HeaderList>
            </Link>
          );
        })}
      </S.HeaderNav>
      <S.HeroNav>
        {HeroNav.map((items) => {
          const { title, navigate, icons, directionIcon } = items;
          return (
            <Link key={title} to={navigate}>
              <S.HeroWrapper>
                <S.HeroTitleWrapper>
                  {icons}
                  <S.HeroTitle>{title}</S.HeroTitle>
                </S.HeroTitleWrapper>
                {directionIcon}
              </S.HeroWrapper>
            </Link>
          );
        })}
      </S.HeroNav>
      <S.CardContainer>123</S.CardContainer>
      <S.CardContainer>123</S.CardContainer>
      <S.CardContainer>123</S.CardContainer>
    </S.Container>
  );
}

export default MyPage;

{
  /* <S.HeaderList>
          <S.StyledBsCreditCard />
          <S.HeaderListTitle>카드 관리</S.HeaderListTitle>
        </S.HeaderList> */
}
