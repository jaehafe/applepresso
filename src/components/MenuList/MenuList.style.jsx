import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
`;

export const MenuLists = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 30px 0;
`;

export const MenuList = styled.li`
  /* border: 1px solid; */
`;

export const ButtonContainer = styled.div`
  margin-top: 100px;
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
