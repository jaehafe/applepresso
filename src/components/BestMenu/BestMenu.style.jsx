import styled from 'styled-components';
import { FaRegHandPointer } from 'react-icons/all';

export const AddEasyOrderButton = styled.div`
  border: 1px solid;
  display: flex;
  align-items: center;
  gap: 20px;
  width: auto;
  height: 120px;
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
export const StyledFaRegHandPointer = styled(FaRegHandPointer)`
  color: var(--main-color);
  font-size: 30px;
`;

export const AddEasyOrderDesc = styled.span`
  color: #c9c1c1;
  white-space: pre-line;
`;
export const AddEasyOrderExtraListButton = styled.div`
  border: 1px solid;
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

//
export const BannerContainer = styled.div`
  display: flex;
  scroll-snap-type: x mandatory;
  -webkit-overflow-scrolling: touch;
  overflow-x: scroll;

  ::-webkit-scrollbar {
    /* width: 10px; */
    height: 10px;
  }

  /* ::-webkit-scrollbar-track {
    background-color: #f1f1f1;
  } */

  ::-webkit-scrollbar-thumb {
    background-color: #888;
    border-radius: 6px;
  }

  /* ::-webkit-scrollbar-thumb:hover {
    background-color: #555;
  } */
`;
export const BannerSlides = styled.div`
  display: flex;
  gap: 20px;
`;
export const BannerWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  scroll-snap-align: start;
  width: 120px;
  height: 120px;

  border-radius: 20px;
  background-color: #fff;
`;

export const MenuThumbnail = styled.img`
  width: 80px;
  height: 80px;
`;
export const MenuInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const MenuTitle = styled.div`
  font-size: 14px;
  text-align: center;
`;
export const MenuCount = styled.div``;

export const ButtonContainer = styled.div`
  border: 1px solid;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  height: 60px;
  border-radius: 16px;
  background-color: #fff;
`;
export const RetryButton = styled.button`
  border: 1px solid;
  padding: 10px 20px;
  border-radius: 20px;
  background-color: var(--button-color);
  color: #fff;
`;
export const TitleWrapper = styled.div``;
export const RetryTitle = styled.div``;
export const RetrySubtitle = styled.div``;
// export const Container = styled.div``
