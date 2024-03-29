import styled from 'styled-components';
import { BsArrowLeft, AiOutlineCalendar } from 'react-icons/all';

export const Container = styled.div`
  border: 1px solid;
  min-height: 100vh;
  background-color: var(--background-color);
  padding-top: 80px;
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

// body

export const SelectContainer = styled.div`
  background-color: #fff;
  padding: 30px 20px;
`;

export const SetDateContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;
export const DateWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: grey;
`;
export const StyledAiOutlineCalendar = styled(AiOutlineCalendar)`
  font-size: 20px;
`;
export const Date = styled.div``;
export const SetDateButton = styled.button`
  border: 1px solid var(--main-color);
  border-radius: 20px;
  padding: 10px 20px;
  font-size: 20px;

  &:hover,
  &:active {
    background-color: var(--button-color);
    color: #fff;
  }
`;
