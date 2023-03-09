import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';
import { AiOutlineUnorderedList } from 'react-icons/ai';

export const StyledBsArrowLeft = styled(BsArrowLeft)`
  font-size: 24px;
  color: #333;
  cursor: pointer;
`;

export const StyledAiOutlineUnorderedList = styled(AiOutlineUnorderedList)`
  font-size: 24px;
  color: #333;
  cursor: pointer;
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

export const MenuContainer = styled.div`
  margin-top: 100px;
  border: 1px solid;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 20px;
`;

export const IMGWrapper = styled.div`
  width: 300px;
  height: 300px;
`;
export const MenuIMG = styled.img`
  object-fit: contain;
  background-color: rgb(239, 224, 224);
  border-radius: 40px;
  object-fit: contain;
`;

export const MenuInfo = styled.div`
  margin-top: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid rgb(239, 224, 224);
`;
export const MenuTitle = styled.h3`
  font-size: 30px;
`;
export const ENTitle = styled.p`
  font-size: 20px;
  color: rgb(174, 153, 153);
`;
export const Desc = styled.p`
  font-size: 23px;
  text-align: center;
  line-height: 30px;
  color: grey;
  font-weight: 350;
`;
export const MenuDetailInfo = styled.div`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  font-size: 26px;
`;
export const Price = styled.div`
  color: rgb(171, 134, 134);
`;
export const OptionWrapper = styled.div`
  display: flex;
  gap: 30px;
`;
export const Option = styled.button`
  border: 2px solid rgb(213, 197, 197);
  padding: 8px 20px;
  border-radius: 20px;
  color: rgb(213, 197, 197);
  background-color: rgb(245, 238, 238);
  font-size: 20px;

  &:hover {
    background-color: #fff;
  }

  &:active {
    transform: scale(0.95);
  }
`;

// divider
export const Divider = styled.div`
  border-top: 1px solid rgb(213, 197, 197);
  border-bottom: 1px solid rgb(213, 197, 197);
  height: 10px;
  background-color: rgb(245, 238, 238);
`;

// 주문 옵션
export const OrderOptionContainer = styled.div`
  border: 1px solid;
  padding: 0 20px;
`;

export const MenuSelectWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 25px 0;
  border-bottom: 1px solid rgb(239, 224, 224);
`;
export const CountSpan = styled.span`
  font-size: 26px;
`;
export const CountControlWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

export const QtyBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border: 2px solid rgb(213, 197, 197);
  border-radius: 20px;
  color: rgb(213, 197, 197);
  font-size: 30px;
  cursor: pointer;

  &:hover {
    background-color: rgb(245, 238, 238);
  }
  &:active {
    transform: scale(0.95);
  }
`;

export const CountMinus = styled(QtyBtn)``;
export const CountQty = styled.div`
  font-size: 26px;
`;
export const CountPlus = styled(QtyBtn)``;

export const OrderButtons = styled.div`
  display: flex;
  justify-content: center;
`;
export const OrderButton = styled.button`
  display: grid;
  grid-template-columns: 1fr;
  padding: 26px 0;
  color: #fff;
  font-size: 23px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: rgba(211, 86, 107, 0.8); // hover 시 약간 밝게
  }
`;
export const AddCartButton = styled(OrderButton)`
  width: 50%;
  background-color: #d3566b;
`;
export const OrderNowButton = styled(OrderButton)`
  width: 50%;
  background-color: var(--main-color);
`;
