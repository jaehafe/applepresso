import styled from 'styled-components';
import { BsArrowLeft, FiMapPin, FiSearch } from 'react-icons/all';

export const StyledBsArrowLeft = styled(BsArrowLeft)`
  font-size: 24px;
  color: #333;
  cursor: pointer;
`;

export const StyledFiMapPin = styled(FiMapPin)`
  font-size: 26px;
  cursor: pointer;
`;
export const StyledFiSearch = styled(FiSearch)`
  font-size: 26px;
  cursor: pointer;
`;

export const Container = styled.div`
  background-color: var(--background-color);
  min-height: 100vh;
  padding: 180px 20px 100px;
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
  /* border-bottom: 1px solid rgb(239, 224, 224); */
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
export const IconWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
// header nav
export const HeaderNavContainer = styled.div`
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  position: fixed;
  top: 80px;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 60px;
  background-color: #fff;
  border-bottom: 1px solid rgb(239, 224, 224);
`;
export const HeaderNavWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-around;
  height: 100%;
`;
export const HeaderNavTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${(props) => (props.isActive ? '#000' : 'var(--subtitle-color)')};
  font-weight: 700;
  border-bottom: 3px solid;
  height: 100%;
`;
// export const HeaderNavTitle = styled.div``;
// export const HeaderNavTitle = styled.div``;
// export const HeaderNavTitle = styled.div``;
// export const HeaderNavTitle = styled.div``;
// export const HeaderNavTitle = styled.div``;
// export const HeaderNavTitle = styled.div``;
// export const HeaderNavTitle = styled.div``;
// export const HeaderNavTitle = styled.div``;
// export const HeaderNavTitle = styled.div``;
// export const HeaderNavTitle = styled.div``;
