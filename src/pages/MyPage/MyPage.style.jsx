import styled from 'styled-components';

import {
  IoReceiptOutline,
  IoIosArrowDown,
  IoIosArrowForward,
  FiBook,
  BsChatDots,
  BiBell,
  RiListSettingsLine,
  BsCreditCard,
  FiLogOut,
  BsShieldCheck,
  BiStoreAlt,
  FiLogIn,
} from 'react-icons/all';

export const Container = styled.div`
  background-color: var(--background-color);
  height: 100vh;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  gap: 26px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const HeaderLeft = styled.div`
  display: flex;
`;
export const ProfileIMG = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 20px;
`;
export const UsernameWrapper = styled.div`
  margin-left: 20px;
  font-size: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;
export const UserName = styled.h1``;
export const UserHi = styled.h1``;
export const StyledFiLogOut = styled(FiLogOut)`
  font-size: 40px;
  cursor: pointer;
`;
export const StyledFiLogIn = styled(FiLogIn)`
  font-size: 40px;
  cursor: pointer;
`;

export const CardContainer = styled.div`
  padding: 30px;
  background-color: #fff;
  border-radius: 16px;
`;
export const HeaderNav = styled(CardContainer)`
  display: flex;
  justify-content: space-between;
`;
export const HeaderList = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
export const HeaderListTitle = styled.h2``;
export const StyledBsCreditCard = styled(BsCreditCard)`
  font-size: 26px;
`;
export const StyledRiListSettingsLine = styled(RiListSettingsLine)`
  font-size: 26px;
`;
export const StyledBiBell = styled(BiBell)`
  font-size: 26px;
`;
export const StyledBsChatDots = styled(BsChatDots)`
  font-size: 26px;
`;

// hero nav
export const HeroNav = styled(CardContainer)`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const HeroWrapper = styled.li`
  display: flex;
  justify-content: space-between;
`;
export const HeroTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const StyledFiBook = styled(FiBook)`
  font-size: 20px;
`;
export const StyledIoIosArrowForward = styled(IoIosArrowForward)`
  font-size: 20px;
`;
export const StyledIoIosArrowDown = styled(IoIosArrowDown)`
  font-size: 20px;
`;
export const StyledIoReceiptOutline = styled(IoReceiptOutline)`
  font-size: 20px;
`;
export const StyledBsShieldCheck = styled(BsShieldCheck)`
  font-size: 20px;
`;
export const StyledBiStoreAlt = styled(BiStoreAlt)`
  font-size: 20px;
`;
export const HeroTitle = styled.h3``;

// 배너 슬라이드 이미지
export const BannerIMGContainer = styled.div``;
export const BannerSlides = styled.div`
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  display: flex;
  gap: 20px;
  overflow-x: scroll;
`;
export const BannerIMG = styled.img`
  scroll-snap-align: start;
  width: 400px;
  height: 140px;
  object-fit: cover;
  border-radius: 20px;
`;
