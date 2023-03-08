import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

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
