import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/bs';
import { AiOutlineUnorderedList } from 'react-icons/ai';

export const StyledBsArrowLeft = styled(BsArrowLeft)`
  font-size: 24px;
  color: #333;
  cursor: pointer;
`;

export const StyledAiOutlineUnorderedList = styled(AiOutlineUnorderedList)`
  font-size: 24px;
  color: #333;
  cursor: pointer;
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
  border-bottom: 1px solid var(--main-color);
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

export const MenuContainer = styled.div`
  margin-top: 100px;
  border: 1px solid;
  display: flex;
  justify-content: center;
`;
