import styled from 'styled-components';
import { FaRegHandPointer } from 'react-icons/all';

export const AddEasyOrderButton = styled.div`
  border: 1px solid;
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
