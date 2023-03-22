import styled from 'styled-components';
import { BsArrowLeft, AiOutlineRightCircle } from 'react-icons/all';

export const StyledAiOutlineRightCircle = styled(AiOutlineRightCircle)``;
export const StyledBsArrowLeft = styled(BsArrowLeft)`
  font-size: 24px;
  color: #333;
  cursor: pointer;
`;

export const Container = styled.div`
  /* background-color: var(--background-color); */
  min-height: 100vh;
`;

export const HeaderContainer = styled.div`
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 80px;
  background-color: #fff;
  padding: 0 20px;
  border-bottom: 1px solid rgb(239, 224, 224);
`;

export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 20px;
`;
export const HeaderTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;
export const HeaderTitle = styled.h2`
  font-weight: 500;
`;

export const HeroAlertContainer = styled.div`
  z-index: 2;
  position: fixed;
  top: 130px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: auto;
  padding: 50px 20px;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid var(--division);
  background-color: #7171dd;
  color: #fff;
`;
export const HeroTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const HeroTitle = styled.h1`
  font-size: 30px;
  font-weight: 400;
`;
export const HeroWarningWrapper = styled.div`
  margin-left: 10px;
  display: flex;
  gap: 6px;
`;
export const HeroWarning = styled.span`
  font-size: 14px;
  border: 1px solid var(--division);
  border-radius: 16px;
  padding: 6px 10px;
`;
export const HeroParagraphWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const HeroParagraph = styled.p``;

// body

export const Main = styled.div`
  padding: 360px 20px 10px;
  min-height: 100vh;
  background-color: var(--background-color);
  display: grid;
  grid-template-rows: repeat(7, 1fr);
`;
export const MainRow = styled.div`
  height: 140px;

  display: grid;
  grid-template-columns: 1fr 0.3fr 5fr;
`;

export const MainRowAside = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 6px;

  color: grey;
  font-weight: 600;
`;
export const Date = styled.div``;
export const DayOfWeek = styled.div`
  text-align: end;
`;

//
export const MainBorder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

//
export const MainRowHero = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const MenuWrapper = styled.div`
  display: flex;
  align-items: center;

  padding: 10px 20px;
  width: 90%;
  height: 90%;
  background-color: #fff;
  border-radius: 20px;
`;
export const Thumbnail = styled.img`
  height: 80px;
  width: 80px;
  object-fit: cover;
  margin-right: 20px;
`;
export const MenuInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
`;
export const MenuTitle = styled.h3`
  font-size: 22px;
`;
export const MenuEngTitle = styled.h4`
  font-size: 14px;
  font-weight: 400;
  color: var(--subtitle-color);
`;

export const MenuPriceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
export const OriginalPrice = styled.div`
  color: var(--division);
  text-decoration: line-through;
`;
export const DiscountedPrice = styled.div`
  font-weight: 500;
  font-size: 20px;
  color: var(--main-color);
`;
// export const Container = styled.div``

// error boundary
export const ButtonContainer = styled.div`
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 60px;
  border-radius: 16px;
  background-color: #fff;
`;
export const RetryButton = styled.button`
  border: 1px solid;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: var(--button-color);
  color: #fff;
`;
export const TitleWrapper = styled.div``;
export const RetryTitle = styled.div``;
export const RetrySubtitle = styled.div``;
