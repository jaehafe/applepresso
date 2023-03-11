import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';
import { BsExclamationCircle } from 'react-icons/bs';
import { IoIosArrowForward } from 'react-icons/io';

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

export const BodyPaddingTop = styled.div`
  /* margin-top: 100px; */
  border: 1px solid;
  padding: 80px 0;

  /* border: 1px solid; */
`;

export const BodyContainer = styled.div`
  /* border: 1px solid; */
  /* padding: 200px 20px 100px; */
`;

export const TipsWrapper = styled.div`
  display: flex;
  gap: 10px;
  background-color: #fff;
  border: 1px solid var(--division);
  padding: 0 20px;
  color: var(--subtitle-color);
  font-size: 14px;
  padding: 10px 20px;
  margin-bottom: 10px;
`;
export const StyledBsExclamationCircle = styled(BsExclamationCircle)`
  color: red;
`;
export const Tips = styled.div``;

// 주문 매장
export const Wrapper = styled.div`
  border: 1px solid grey;
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
  border: 1px solid grey;
  background-color: #fff;
  padding: 30px 20px;
  margin-bottom: 10px;
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
  margin-bottom: 10px;
`;
export const SelectTakeoutOptionTitle = styled(SelectTitle)`
  margin-bottom: 16px;
`;
export const TakeoutOptionsWrapper = styled(SelectTitle)`
  display: flex;
  gap: 6px;
  margin-bottom: 10px;
`;
export const TakeOutOptions = styled.div`
  display: flex;
  gap: 6px;
  flex-direction: column;
  align-items: center;
  color: var(--subtitle-color);
  border: 1px solid var(--subtitle-color);
  border-radius: 10px;
  padding: 16px 10px;

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
`;

// 쿠폰
export const SelectCouponWrapper = styled(Wrapper)``;
export const SelectCouponHeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
export const SelectCouponTitleWrapper = styled(SelectTitle)`
  display: flex;
  gap: 6px;
`;
export const SelectCouponTitle = styled(SelectTitle)``;
