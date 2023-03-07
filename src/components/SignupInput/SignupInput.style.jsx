import styled from 'styled-components';

export const SingUpInputWrapper = styled.div``;

export const Label = styled.label`
  font-size: 12px;
  color: gray;
`;

export const LoginInput = styled.input`
  margin-top: 3px;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 46px;

  border: 1px solid #d7a1b5;
  border-radius: 6px;
  padding: 16px;

  &::placeholder {
    color: #d7a1b5;
  }
`;

export const InputErrorMSG = styled.span`
  font-size: 12px;
  padding: 3px;
  color: red;
  display: none;
`;
