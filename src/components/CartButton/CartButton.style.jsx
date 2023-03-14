import styled, { keyframes } from 'styled-components';
import { BsCart2 } from 'react-icons/bs';
import { BsBagHeart } from 'react-icons/bs';

export const Container = styled.div`
  z-index: 10;
  display: flex;
  /* flex-direction: column; */
  gap: 10px;
  justify-content: center;
  position: fixed;
  bottom: 100px;
  right: 140px;
  width: 120px;
  height: 100px;
  background-color: rgba(227, 153, 165, 0.8);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  cursor: pointer;
  animation: ${({ btnIsHighlighted }) => btnIsHighlighted && bump} 300ms ease-out;
`;

export const StyledBsCart2 = styled(BsCart2)`
  position: relative;
  color: #fff;
  font-size: 36px;
`;

export const StyledBsBagHeart = styled(BsBagHeart)`
  position: relative;
  color: #fff;
  font-size: 36px;
`;

export const CartButton = styled.button``;

export const CartInQtyWrapper = styled.div`
  z-index: 10;
  position: absolute;
  right: 60px;
  top: 30px;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
`;

export const EasyOrderCartInQtyWrapper = styled.div`
  z-index: 10;
  position: absolute;
  right: 10px;
  top: 30px;
  width: 20px;
  height: 20px;
  background-color: #fff;
  border-radius: 50%;
`;

export const CartInQty = styled.span`
  color: var(--main-color);
  transform: translateY(1px);
`;

const bump = keyframes`
  0% {
    transform: scale(1);
  }
  10% {
    transform: scale(0.9);
  }
  30% {
    transform: scale(1.1);
  }
  50% {
    transform: scale(1.15);
  }
  100% {
    transform: scale(1);
  }
`;
