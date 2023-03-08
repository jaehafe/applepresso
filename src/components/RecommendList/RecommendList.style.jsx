import styled from 'styled-components';
import { MenuStatus } from '../Menu/Menu.style';

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
