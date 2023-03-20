import styled from 'styled-components';
import { BsArrowLeft } from 'react-icons/all';

export const StyledBsArrowLeft = styled(BsArrowLeft)`
  font-size: 24px;
  color: #333;
  cursor: pointer;
`;

export const Container = styled.div`
  border: 1px solid;
  min-height: 100vh;
`;

// header
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
  box-shadow: var(--box-shadow);
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

// map
export const MapContainer = styled.div`
  padding-top: 80px;
  width: 100%;
  min-height: 100vh;
`;
// export const Container = styled.div``;
// export const Container = styled.div``;
// export const Container = styled.div``;

// export const Container = styled.div``;
// export const Container = styled.div``;
// export const Container = styled.div``;
// export const Container = styled.div``;

// export const Container = styled.div``;
// export const Container = styled.div``;
// export const Container = styled.div``;
// export const Container = styled.div``;

// export const Container = styled.div``;
// export const Container = styled.div``;
// export const Container = styled.div``;
// export const Container = styled.div``;
