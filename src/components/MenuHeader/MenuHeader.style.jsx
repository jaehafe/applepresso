import styled from 'styled-components';
import { FiSearch, FiMapPin } from 'react-icons/all';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Container = styled.div`
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
`;

export const StyledFiSearch = styled(FiSearch)``;
export const HeaderWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 20px;
`;
export const HeaderTitle = styled.h2`
  font-weight: 500;
`;

export const HeaderNav = styled(Swiper)`
  z-index: 10;
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 50px;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid var(--division);
  background-color: #fff;
`;

export const NavList = styled(SwiperSlide)`
  display: flex;
  align-items: center;
`;

export const NavTitle = styled.span`
  color: ${(props) => (props.$active ? '#000' : '#ae9999')};
  font-weight: ${(props) => (props.$active ? '700' : '400')};
`;

//
export const CurrentStoreContainer = styled.div`
  z-index: 10;
  position: fixed;
  top: 130px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 50px;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--division);
  background-color: var(--background-color);
`;

export const StyledFiMapPin = styled(FiMapPin)`
  color: var(--subtitle-color);
`;
export const StoreTitleWrapper = styled.div`
  display: flex;
  gap: 6px;
`;
export const StoreTitle = styled.h3``;

export const StoreDesc = styled.p`
  color: var(--subtitle-color);
`;
export const ChangeStoreButton = styled.button`
  padding: 8px 12px;
  border: 1px solid red;
  border-radius: 20px;
  background-color: #fff;
  color: grey;

  &:hover,
  &:active {
    color: #fff;
    background-color: var(--button-color);
  }
`;
