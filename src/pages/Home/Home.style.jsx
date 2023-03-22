import styled, { keyframes } from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FiCoffee } from 'react-icons/fi';
import { FaRegHandPointer } from 'react-icons/fa';

export const Container = styled.div`
  height: 100vh;
  background-color: #fee7ef;
  padding: 0 20px;
`;

// banner wrapper
export const BannerWrapper = styled.div`
  padding-top: 1px;
`;

export const HomeSwiper = styled(Swiper)`
  margin-top: 20px;
`;

export const HomeSwiperSlide = styled(SwiperSlide)``;

export const BannerIMG = styled.img`
  width: 300px;
  height: 500px;
  border-radius: 30px;
`;

export const RecommendNav = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 40px;
`;

// 오늘의 메뉴
export const TodayMenu = styled.li`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  width: 100px;
  height: 100px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: var(--box-shadow);
  cursor: pointer;
`;
export const StyledFiCoffee = styled(FiCoffee)`
  font-size: 30px;
  color: orange;
`;
export const TodayMenuTitle = styled.p`
  font-weight: 700;
`;

const balloon = keyframes`
  0% {
    transform: translateY(0);
  }
  10% {
    transform: translateY(-10px) 
  }
  30% {
    transform: translateY(5px) 
  }
  50% {
    transform: translateY(-5px) 
  }
  100% {
    transform: translateY(0) 
  }
`;
export const TodayMenuBalloon = styled.i`
  position: absolute;
  padding: 3px 6px;
  top: -10px;
  left: -10px;
  color: #fff;
  background-color: var(--main-color);
  border-radius: 20px;
  animation: ${balloon} 3000ms infinite;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border: 12px solid transparent;
    border-top-color: var(--main-color);
    border-bottom: 0;
    border-right: 0;
    margin-left: -5px;
    margin-bottom: -8px;
  }
`;

//

export const UserStatsWrapper = styled.ul`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 340px;
  height: 100px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: var(--box-shadow);
`;

export const UserStats = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  padding: 5px 10px;
  cursor: pointer;
`;

export const InfoCount = styled.span`
  font-weight: 700;
  font-size: 20px;
`;

export const InfoName = styled.span`
  color: #c9c1c1;
`;

export const EasyOrderContainer = styled.div`
  margin-top: 40px;
`;
export const EasyOrderTitle = styled.span`
  font-size: 20px;
  margin-bottom: 10px;
`;

export const AddEasyOrderWrapper = styled.div``;

export const AddEasyOrderLists = styled.ul`
  align-items: center;
  gap: 20px;
`;
export const AddEasyOrderButton = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;
export const AddEasyOrderList = styled.li`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 250px;
  height: 100px;
  padding: 16px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: var(--box-shadow);
  cursor: pointer;
`;

export const AddEasyOrderListsSwiper = styled(Swiper)`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const AddEasyOrderListSwiperSlide = styled(SwiperSlide)`
  display: flex;
  gap: 10px;
  align-items: center;
  width: 250px;
  height: 100px;
  padding: 16px;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: var(--box-shadow);
  cursor: pointer;
`;
export const EasyOrderIMGWrapper = styled.div`
  width: 60px;
`;
export const EasyOrderIMG = styled.img``;
export const EasyOrderMenuTitle = styled.div``;

export const StyledFaRegHandPointer = styled(FaRegHandPointer)`
  color: var(--main-color);
  font-size: 30px;
`;
export const AddEasyOrderDesc = styled.span`
  color: #c9c1c1;
  white-space: pre-line;
`;

export const AddEasyOrderExtraListButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  background-color: #e2ced7;
  color: #fff;
  box-shadow: var(--box-shadow);
`;
