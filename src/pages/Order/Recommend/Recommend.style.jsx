import styled from 'styled-components';
import { MenuStatus } from '../../../components/Menu/Menu.style';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Container = styled.div`
  margin: 170px 0 100px;
  height: auto;
`;

export const Wrapper = styled.div`
  margin-bottom: 30px;
`;
export const RecommendTitle = styled.h3`
  margin-bottom: 20px;
  font-size: 20px;
  font-weight: 400;
  padding: 0 20px;
`;
export const RecommendLists = styled(Swiper)`
  display: flex;
  padding: 20px 10px;
`;
export const RecommendList = styled(SwiperSlide)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
