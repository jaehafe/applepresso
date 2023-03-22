import styled from 'styled-components';
import { FiMapPin } from 'react-icons/all';

export const CurrentStoreContainer = styled.div`
  z-index: 2;
  position: fixed;
  top: ${(props) => props.top};
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
