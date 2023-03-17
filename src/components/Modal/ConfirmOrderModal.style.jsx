import styled from 'styled-components';

// export const Container = styled.div`
//   margin-top: 300px;
//   position: fixed;
//   z-index: 10;
//   border: 1px solid;
//   background-color: #fff;
//   width: 300px;
//   height: 300px;
// `;
// export const Wrapper = styled.div``;
// export const CloseButton = styled.div``;
// export const Content = styled.div``;
// export const Title = styled.div``;
// export const ButtonWrapper = styled.div``;
// export const Button = styled.button``;

import { BsExclamationCircle } from 'react-icons/bs';

export const ModalContainer = styled.div`
  z-index: 10;
  border: 1px solid;
  position: fixed;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  height: 300px;
  border-radius: 20px;
  background-color: #fff;
`;

export const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 40px;
`;

export const Title = styled.h3`
  font-size: 20px;
  margin-bottom: 40px;
`;
export const Input = styled.input`
  border: 1px solid var(--subtitle-color);
  height: 50px;
  padding: 0 20px;
  margin-bottom: 20px;
`;
export const TipsWrapper = styled.div`
  display: flex;
  gap: 10px;
`;
export const StyledBsExclamationCircle = styled(BsExclamationCircle)`
  color: red;
`;
export const Tips = styled.div`
  color: var(--subtitle-color);
  margin-bottom: 45px;
`;
export const ButtonWrapper = styled.div`
  margin-top: 80px;
  border-top: 1px solid var(--division);
  padding-top: 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  width: 100%;
  font-size: 20px;
`;
export const CancelButton = styled.button`
  border-right: 1px solid var(--division);
`;
export const AddButton = styled.button`
  color: var(--main-color);
`;
