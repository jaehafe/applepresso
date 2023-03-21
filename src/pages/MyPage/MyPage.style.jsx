import styled from 'styled-components';
import { BsGithub, AiOutlineExclamationCircle } from 'react-icons/all';

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
  min-height: 100vh;
  padding: 50px 20px 100px;
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
  padding: 26px;
  background-color: #fff;
  border-radius: 16px;
`;
export const HeaderNav = styled(CardContainer)`
  display: flex;
  justify-content: space-between;
`;
export const HeaderList = styled.li`
  border-radius: 10px;
  width: 70px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: var(--division);
  }
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
  gap: 6px;
`;
export const HeroWrapper = styled.li`
  /* border: 1px solid; */
  border-radius: 10px;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  transition: background-color 0.2s ease-in-out;
  &:hover {
    background-color: var(--division);
  }
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

  ::-webkit-scrollbar {
    /* width: 10px; */
    height: 10px;
  }

  /* ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  } */

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 6px;
  }

  /* ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  } */
`;
export const BannerIMG = styled.img`
  scroll-snap-align: start;
  width: 400px;
  height: 140px;
  object-fit: cover;
  border-radius: 20px;
`;

// github
export const GithubInfoContainer = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  background-color: #fff;
  border-radius: 16px;
`;
export const GithubInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
`;
export const StyledBsGithub = styled(BsGithub)`
  font-size: 20px;
`;

// 주문 내역
export const BestMenuContainer = styled.div`
  margin-top: 10px;
`;
export const BestMenuTitle = styled.h4`
  margin-bottom: 10px;
  font-size: 20px;
`;
export const BestMenuSubTitle = styled.p`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-bottom: 16px;
  color: var(--subtitle-color);
`;

export const StyledAiOutlineExclamationCircle = styled(AiOutlineExclamationCircle)``;
