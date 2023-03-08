import styled from 'styled-components';
import { MenuStatus } from '../../../components/Menu/Menu.style';
import { Swiper, SwiperSlide } from 'swiper/react';

export const Container = styled.div`
  border: 1px solid;
  margin: 170px 0 100px;
  min-height: 100vh;
`;

export const Wrapper = styled.div``;
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

export const IMGWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
`;
export const Thumbnail = styled.img`
  background-color: rgb(239, 224, 224);
  border-radius: 40px;
  object-fit: contain;
`;

export const RecommendInfo = styled.div`
  margin-top: 16px;
  text-align: center;
`;
export const InfoTitle = styled.h4`
  font-size: 16px;
  font-weight: 500;
`;
export const InfoPrice = styled.strong`
  color: rgba(149, 122, 122, 0.978);
`;

export const RecommendStatus = styled(MenuStatus)``;
