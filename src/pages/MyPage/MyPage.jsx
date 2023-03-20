import React, { useContext, useEffect } from 'react';
import * as S from './MyPage.style';
import { LoginContext } from '../../contexts/LoginContextProvider';
import { Link, useNavigate } from 'react-router-dom';
import myPageBanner1 from '../../assets/myPageBanner/myPageBanner1.jpeg';
import myPageBanner2 from '../../assets/myPageBanner/myPageBanner2.jpeg';
import myPageBanner3 from '../../assets/myPageBanner/myPageBanner3.jpeg';
import myPageBanner4 from '../../assets/myPageBanner/myPageBanner4.jpeg';
import myPageBanner5 from '../../assets/myPageBanner/myPageBanner5.jpeg';
import myPageBanner6 from '../../assets/myPageBanner/myPageBanner6.jpeg';
import SimpleOrderHistory from '../../components/SimpleOrderHistory/SimpleOrderHistory';

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
    navigate: '/storeInfo',
    icons: <S.StyledBiStoreAlt />,
    directionIcon: <S.StyledIoIosArrowForward />,
  },
];

const MyPageBannerItem = [
  { img: myPageBanner1, name: myPageBanner1 },
  { img: myPageBanner2, name: myPageBanner2 },
  { img: myPageBanner3, name: myPageBanner3 },
  { img: myPageBanner4, name: myPageBanner4 },
  { img: myPageBanner5, name: myPageBanner5 },
  { img: myPageBanner6, name: myPageBanner6 },
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
      <S.BannerIMGContainer>
        <S.BannerSlides>
          {MyPageBannerItem.map((item) => {
            return <S.BannerIMG key={item.name} src={item.img} />;
          })}
        </S.BannerSlides>
      </S.BannerIMGContainer>
      {/* 간단한 주문내역 표시 */}
      <S.ShortOrderHistoryContainer>
        <S.ShortOrderHistoryTitle>내가 가장 많이 주문한 메뉴</S.ShortOrderHistoryTitle>
        <SimpleOrderHistory />
      </S.ShortOrderHistoryContainer>
      {/* 깃헙 */}
      <S.GithubInfoContainer
        href="https://github.com/jaehafe/applepresso"
        target="_blank"
        rel="noopener noreferrer"
      >
        <S.GithubInfoWrapper>
          <S.StyledBsGithub />
          애플프레소 깃허브
        </S.GithubInfoWrapper>
        <S.StyledIoIosArrowForward />
      </S.GithubInfoContainer>
    </S.Container>
  );
}

export default MyPage;
