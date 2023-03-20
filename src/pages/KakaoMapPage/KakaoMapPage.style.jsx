import styled from 'styled-components';
import { BsArrowLeft, AiOutlineClose } from 'react-icons/all';

export const StyledBsArrowLeft = styled(BsArrowLeft)`
  font-size: 24px;
  color: #333;
  cursor: pointer;
`;
export const StyledAiOutlineClose = styled(AiOutlineClose)`
  font-size: 24px;
  color: #333;
  cursor: pointer;
`;

export const Container = styled.div`
  position: fixed;
  z-index: 13;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 500px;
  height: 100%;
  border-radius: 20px;
  background-color: #fff;
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
export const IconWrapper = styled.div`
  display: flex;
  gap: 10px;
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
