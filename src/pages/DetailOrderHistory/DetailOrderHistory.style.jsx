import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/all';

export const Container = styled.div`
  min-height: 100vh;
  padding-top: 80px;
  background-color: var(--background-color);
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
  box-shadow: var(--box-shadow);
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
export const StyledBsArrowLeft = styled(BsArrowLeft)`
  font-size: 24px;
  color: #333;
  cursor: pointer;
`;

//body
export const Body = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
`;
export const BodyContainer = styled.div`
  background-color: #fff;
  padding: 30px 20px;
`;
export const OrderInfoContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const OrderInfoWrapper = styled.h2`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 20px;
`;
export const OrderInfoTitle = styled.div``;
export const OrderInfoNumber = styled.div`
  font-size: 14px;
`;
export const OrderInfoOrderedDate = styled.div`
  color: var(--main-color);
`;
// 주문 매장
export const OrderedShop = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
`;
export const Title = styled.h4`
  font-size: 20px;
`;
export const OrderShopTitle = styled(Title)``;
export const OrderedShopWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
`;
export const OrderedShopTitle = styled.h2`
  font-size: 26px;
  font-weight: 500;
`;
export const ShopInfo = styled.div`
  padding: 6px 8px;
  background-color: var(--main-color);
  color: #fff;
  border-radius: 16px;
  font-size: 14px;
`;
export const OrderedShopAddress = styled.div`
  color: var(--subtitle-color);
`;

// 포장 옵션
export const OptionWrapper = styled.div``;
export const OptionTitle = styled(Title)`
  margin-bottom: 20px;
`;
export const OptionInfosWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const OptionInfos = styled.div`
  display: flex;
  gap: 30px;
  justify-content: space-between;
`;
export const OptionInfoTitle = styled.div``;
export const OptionInfo = styled.div``;

// 주문내역
export const SelectHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SelectTitle = styled.div`
  font-weight: 600;
`;
export const OrderDetailHeaderWrapper = styled(SelectHeaderWrapper)`
  margin-bottom: 20px;
`;
export const OrderDetailTitleWrapper = styled(SelectTitle)``;

// 주문내역 메뉴들
export const MenusContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const MenuDetail = styled.div`
  display: flex;
`;
export const ThumbnailWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 100px;
  border-radius: 40px;
  background-color: rgb(239, 224, 224);
  /* object-fit: contain; */
`;
export const Thumbnail = styled.img`
  width: 100%;
  height: 80px;
  object-fit: contain;
`;
export const OrderInfo = styled.div`
  width: 100%;
  margin-left: 20px;
`;
export const MenuTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  font-size: 22px;
  font-weight: 500;
`;
export const MenuTitle = styled.div``;
export const Amount = styled.div`
  font-size: 20px;
  color: var(--subtitle-color);
`;
export const Price = styled.div``;
export const Options = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Option = styled.div`
  color: var(--subtitle-color);
`;
export const OptionPrice = styled.div`
  color: var(--subtitle-color);
`;

// 결제금액
export const TotalOrderPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const TotalOrderPriceTitle = styled.div`
  color: var(--subtitle-color);
`;

export const TotalOrderPrice = styled.div`
  font-size: 20px;
  font-weight: 500;
`;
// 결제금액

export const PaymentPriceWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 22px;
  font-weight: 500;
`;
export const PaymentPriceTitle = styled.div``;
export const PaymentPrice = styled.div`
  color: var(--main-color);
`;
