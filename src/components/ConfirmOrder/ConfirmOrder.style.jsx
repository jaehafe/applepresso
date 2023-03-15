import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';
import { BsExclamationCircle } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';
import { IoIosArrowDown } from 'react-icons/io';
import { TbReceipt } from 'react-icons/tb';

import { HiOutlineTrash } from 'react-icons/hi';

export const StyledBsArrowLeft = styled(BsArrowLeft)`
  font-size: 24px;
  color: #333;
  cursor: pointer;
`;

export const StyledHiOutlineTrash = styled(HiOutlineTrash)`
  font-size: 26px;
  cursor: pointer;
`;

export const Container = styled.div`
  position: relative;
  background-color: #fae3eb;
  min-height: 100vh;
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
  border-bottom: 1px solid var(--division);
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

//

export const BodyPaddingTop = styled.div`
  padding-top: 80px;
`;

export const BodyContainer = styled.div``;

export const TipsWrapper = styled.div`
  display: flex;
  gap: 10px;
  background-color: #fff;
  border: 1px solid var(--division);
  padding: 0 20px;
  color: var(--subtitle-color);
  font-size: 14px;
  padding: 10px 20px;
  margin-bottom: 6px;
`;
export const StyledBsExclamationCircle = styled(BsExclamationCircle)`
  color: red;
`;
export const Tips = styled.div``;

// 주문 매장
export const Wrapper = styled.div`
  border-top: 1px solid var(--division);
  border-bottom: 1px solid var(--division);
  background-color: #fff;
  padding: 30px 20px;
`;
export const SelectTitle = styled.div`
  font-weight: 600;
`;
export const SelectShopWrapper = styled(Wrapper)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  padding: 30px 20px;
  margin-bottom: 6px;
`;

export const StyledIoIosArrowForward = styled(IoIosArrowForward)`
  color: var(--subtitle-color);
`;

export const SelectShopTitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const SelectShopTitle = styled(SelectTitle)``;
export const SelectedShopWrapper = styled.div`
  display: flex;
  align-items: center;
`;
export const SelectedShopTitle = styled.div`
  font-size: 23px;
  margin-right: 10px;
`;
export const SelectedShopInfos = styled.div`
  display: flex;
  font-size: 14px;
  gap: 6px;
`;
export const ShopInfo = styled.div`
  border: 1px solid var(--main-color);
  padding: 3px 6px;
  border-radius: 10px;
  color: var(--main-color);
`;
export const SelectedShopAddress = styled.div`
  color: var(--subtitle-color);
`;
//

export const SelectTakeoutOptionWrapper = styled(Wrapper)`
  margin-bottom: 6px;
`;
export const SelectTakeoutOptionTitle = styled(SelectTitle)`
  margin-bottom: 16px;
`;
export const TakeoutOptionsWrapper = styled(SelectTitle)`
  display: flex;
  /* justify-content: center; */
  gap: 6px;
  margin-bottom: 10px;
`;
export const TakeOutOptions = styled.div`
  /* border: 1px solid; */
  display: flex;
  justify-content: center;
  text-align: center;
  gap: 6px;
  flex-direction: column;
  align-items: center;
  width: 110px;
  height: 70px;
  /* color: var(--subtitle-color); */
  border: 1px solid var(--subtitle-color);
  border-radius: 10px;
  padding: 16px 10px;

  color: ${(props) => (props.$isActive ? '#fff' : 'var(--subtitle-color)')};
  background-color: ${(props) => (props.$isActive ? 'var(--main-color)' : '')};

  &:hover,
  &:active {
    color: #fff;
    background-color: var(--main-color);
  }
`;
export const TakeOutOptionsTitle = styled.div``;
export const TakeOutOptionsSubTitle = styled.div`
  font-size: 13px;
`;

export const TakeoutTip = styled.div`
  display: flex;
  gap: 10px;
  color: var(--subtitle-color);
  font-size: 14px;
  margin-bottom: 20px;
`;

export const TakeoutRequestMemo = styled.div`
  display: flex;
  justify-content: flex-end;
  color: var(--main-color);
  cursor: pointer;
  margin-bottom: 10px;
`;
export const TakeoutRequestWrapper = styled.div`
  display: flex;
`;
export const StyledTbReceipt = styled(TbReceipt)`
  color: var(--main-color);
  margin-right: 6px;
`;

// 쿠폰
export const SelectCouponWrapper = styled(Wrapper)`
  margin-bottom: 6px;
`;
export const SelectHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SelectCouponHeaderWrapper = styled(SelectHeaderWrapper)``;
export const SelectCouponTitleWrapper = styled(SelectTitle)`
  display: flex;
  gap: 6px;
  margin-bottom: 20px;
`;
export const SelectCouponTitle = styled(SelectTitle)``;

export const CouponApplyCheckBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;
export const CouponApplyCheckBox = styled.input`
  /* font-size: 16px; */
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: flex-start;
  margin-right: 10px;
`;
export const CouponApplyTitle = styled.div`
  font-size: 23px;
  color: var(--main-color);
`;

export const CouponApplyListWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const CouponApplyListTitle = styled.div``;
export const CouponApplyListPrice = styled.div``;

// 포인트
export const SelectPointWrapper = styled(Wrapper)`
  margin-bottom: 6px;
`;
export const SelectPointHeaderWrapper = styled(SelectHeaderWrapper)``;
export const PointApplyCheckBoxWrapper = styled.div`
  display: flex;
`;
export const PointApplyCheckBox = styled.input`
  width: 20px;
  height: 20px;
  display: flex;
  justify-content: flex-start;
  margin-right: 10px;
`;
export const PointApplyTitle = styled.div`
  font-size: 23px;
  color: var(--main-color);
`;
export const SelectPointTitleWrapper = styled(SelectTitle)`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const StyledIoIosArrowDown = styled(IoIosArrowDown)`
  color: var(--subtitle-color);
  cursor: pointer;
`;

// Wrapper
// SelectHeaderWrapper
// SelectTitle

// 픽업 예정시간
export const SelectPickupTimeWrapper = styled(Wrapper)`
  margin-bottom: 6px;
`;
export const SelectPickupTimeHeaderWrapper = styled(SelectHeaderWrapper)``;
export const SelectPickupTime = styled(SelectTitle)`
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 10px;
`;
export const SelectPickupTimeStrong = styled.strong`
  color: var(--main-color);
`;
export const SelectPickupTimeRange = styled.input`
  margin-bottom: 20px;
`;
export const SelectPickupTimeTip = styled.div`
  color: var(--main-color);
`;

// 결제 정보
export const SelectPaymentWrapper = styled(Wrapper)`
  margin-bottom: 6px;
`;
export const SelectPaymentHeaderWrapper = styled(SelectHeaderWrapper)`
  margin-bottom: 20px;
`;
export const SelectPaymentTitleWrapper = styled(SelectTitle)``;
export const SelectPaymentInfo = styled.div`
  font-size: 20px;
`;

// 주문 내역
export const OrderDetailWrapper = styled(Wrapper)`
  margin-bottom: 6px;
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
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  font-size: 22px;
  font-weight: 500;
`;
export const Title = styled.div``;
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

export const TotalWrapper = styled.div`
  margin-top: 20px;
  border-top: 1px solid rgb(239, 224, 224);
  display: flex;
  justify-content: space-between;
  padding: 20px 0 0;
`;
export const TotalTitle = styled.div`
  font-weight: 500;
`;
export const TotalPrice = styled.div`
  font-size: 22px;
  color: var(--main-color);
`;

// 결제 금액
export const OrderCalcWrapper = styled(Wrapper)``;
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
export const PaymentCalcWrapper = styled(Wrapper)``;
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
//
export const PaymentButtonContainer = styled.button`
  width: 500px;
  height: 80px;
  background-color: #e9adb6;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);

  &:hover,
  &:active {
    background: rgba(233, 173, 182, 0.8);
  }
`;
export const PaymentButtonWrapper = styled.div`
  color: #fff;
  font-size: 26px;
`;
