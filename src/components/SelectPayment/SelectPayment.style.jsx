import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';

export const StyledBsArrowLeft = styled(BsArrowLeft)`
  font-size: 24px;
  color: #333;
  cursor: pointer;
`;

export const Container = styled.div`
  height: 100vh;
  padding-top: 80px;
`;

export const HeaderContainer = styled.div`
  z-index: 10;
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

// Body
export const BodyContainer = styled.div``;
export const PaymentContainer = styled.div`
  background-color: #f2dfe7;
  padding: 30px 50px 70px;
`;
export const PaymentIMGWrapper = styled.div`
  object-fit: contain;
`;
export const PaymentIMG = styled.img`
  border-radius: 30px;
`;

export const TipsWrapper = styled.div``;
export const TipsTitle = styled.h3`
  margin-top: 100px;
  font-size: 26px;
  text-align: center;
`;
export const TipsSubtitle = styled.div`
  margin-top: 20px;
  font-size: 20px;
  text-align: center;
  color: var(--subtitle-color);
`;

// 버튼
export const ButtonContainer = styled.button`
  z-index: 10;
  display: flex;

  justify-content: space-around;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  transition: height 0.3s ease-in-out;
  height: 80px;

  background-color: var(--button-color);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

  color: #fff;
  font-size: 20px;
`;
