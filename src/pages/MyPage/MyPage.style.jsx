import styled from 'styled-components';
import { FiLogOut } from 'react-icons/fi';

export const Container = styled.div`
  background-color: var(--background-color);
  height: 100vh;
  padding: 50px 20px;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const HeaderLeft = styled.div`
  display: flex;
`;
export const ProfileIMG = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 20px;
`;
export const UsernameWrapper = styled.div`
  margin-left: 20px;
  font-size: 26px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10px;
`;
export const UserName = styled.h1``;
export const UserHi = styled.h1``;
export const StyledFiLogOut = styled(FiLogOut)`
  font-size: 40px;
`;

// export const UserName = styled.div``;
// export const UserName = styled.div``;
// export const UserName = styled.div``;
// export const UserName = styled.div``;
// export const UserName = styled.div``;
