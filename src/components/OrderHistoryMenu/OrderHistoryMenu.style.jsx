import styled from 'styled-components';
import { FiMapPin } from 'react-icons/all';

export const OrderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0px;
`;
export const OrderWrapper = styled.div`
  background-color: #fff;
  margin: 6px 20px;
  padding: 30px 20px;
  border-radius: 20px;
`;

export const OrderInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
`;
export const OrderInfoLeft = styled.div`
  display: flex;
  gap: 10px;
  padding: 10px;
`;

export const Thumbnail = styled.img`
  width: 60px;
  height: 60px;
`;
export const OrderInfoLeftWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const OrderShopInfoWrapper = styled.div`
  display: flex;
  gap: 6px;
  color: var(--subtitle-color);
`;
export const OrderShopInfoName = styled.div``;
export const StyledFiMapPin = styled(FiMapPin)``;
export const OrderTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
`;
export const OrderDateWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  color: var(--subtitle-color);
`;
export const OrderDateTitle = styled.div``;
export const OrderDate = styled.div``;
export const OrderInfoRight = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;
export const OrderStatusButton = styled.div`
  border: 1px solid var(--subtitle-color);
  border-radius: 20px;
  padding: 6px 10px;
`;
export const PaidAmountTitle = styled.div`
  margin-top: 20px;
  font-weight: 700;
`;
export const PaidAmount = styled.div`
  margin-top: 10px;
  color: var(--main-color);
  font-weight: 900;
  font-size: 20px;
`;
