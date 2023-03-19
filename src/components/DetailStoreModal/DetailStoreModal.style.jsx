import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 11;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  position: fixed;
  z-index: 12;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 420px;
  height: 80%;
  border-radius: 20px;
  background-color: #fff;
`;

// 버튼
export const ButtonWrapper = styled.div``;
export const CancelButton = styled.div``;
export const SelectButton = styled.div``;
// export const Container = styled.div``
// export const Container = styled.div``
// export const Container = styled.div``
// export const Container = styled.div``
// export const Container = styled.div``
// export const Container = styled.div``
// export const Container = styled.div``
// export const Container = styled.div``
// export const Container = styled.div``
// export const Container = styled.div``
// export const Container = styled.div``
// export const Container = styled.div``
// export const Container = styled.div``
// export const Container = styled.div``
// export const Container = styled.div``
// export const Container = styled.div``
// export const Container = styled.div``
