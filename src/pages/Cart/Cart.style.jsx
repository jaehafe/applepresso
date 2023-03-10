import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';
import { AiOutlineUnorderedList } from 'react-icons/ai';
import { HiOutlineTrash } from 'react-icons/hi';
import { Swiper, SwiperSlide } from 'swiper/react';

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

export const CartBody = styled.div`
  padding: 100px 20px 100px;
`;

export const OrderDetailWrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

export const CheckBoxContainer = styled.div``;
export const CheckBox = styled.input`
  width: 30px;
  height: 28px;
  border-radius: 50%;
  border: 2px solid #ccc;
  /* appearance: none; */
  outline: none;
  transition: all 0.3s ease;

  &:checked {
    background-color: #ccc;
    border: 2px solid #ccc;
  }

  &:hover {
    cursor: pointer;
  }
`;

export const OrderDetail = styled.div`
  margin-bottom: 10px;
  display: flex;
  width: 100%;
  padding: 26px 16px;
  border-radius: 20px;
  background-color: #fff;
`;

export const ThumbnailWrapper = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 20px;
  background-color: #fff;
  object-fit: contain;
`;
export const Thumbnail = styled.img`
  width: 100%;
  height: 100px;
  object-fit: contain;
`;
export const OrderInfo = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  margin: 0 20px;
`;
export const TitleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 30px;
  font-size: 22px;
  font-weight: 500;
`;
export const Title = styled.div``;
export const Price = styled.div``;
export const Options = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const Option = styled.div`
  color: rgb(174, 153, 153);
`;
export const OptionPrice = styled.div``;

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

// button container
export const ButtonContainer = styled.div`
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
  height: ${(props) => (props.deleteMenu ? '80px' : '130px')};

  background-color: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;

export const OrderButtonWrapper = styled.div`
  width: 100%;
  height: 100%;
`;
export const OrderButton = styled.button`
  width: 100%;
  height: 80px;

  background-color: #e9adb6;
  color: #fff;
  font-size: 26px;

  &:hover,
  &:active {
    background: rgba(233, 173, 182, 0.8);
  }
`;

export const OrderCalculateWrapper = styled.div`
  height: 50px;

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 20px;
  font-size: 20px;
  border-top: 1px solid rgb(239, 224, 224);
`;

export const OrderTotalCount = styled.div``;
export const OrderTotalPrice = styled.div`
  color: var(--main-color);
  font-size: 26px;
`;

export const SelectAllButton = styled.button`
  width: 50%;
  height: 100%;
  color: #fff;
  background-color: grey;
  font-size: 26px;
`;
export const DeleteSelectedMenuButton = styled.button`
  width: 50%;
  height: 100%;
  color: #fff;
  background-color: ${(props) =>
    props.selectedMenus ? '#e9adb6' : 'rgba(233, 173, 182, 0.4)'};
  pointer-events: ${(props) => (props.selectedMenus ? 'auto' : 'none')};
  /* cursor: ${(props) => (props.selectedMenus ? 'pointer' : 'not-allowed')}; */

  font-size: 26px;
`;
