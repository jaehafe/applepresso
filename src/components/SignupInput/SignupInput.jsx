import React, { useState } from 'react';
import * as S from './SignupInput.style';

function SignupInput(props) {
  const [focused, setFocused] = useState(false);
  const { label, errorMessage, onChange, id, ...inputProps } = props;

  const handleFocus = () => {
    setFocused(true);
  };

  return (
    <S.SingUpInputWrapper>
      <S.Label>{label}</S.Label>
      <S.LoginInput
        {...inputProps}
        onChange={onChange}
        onBlur={handleFocus} // 포커스 해제
        onFocus={() => inputProps.name === 'confirmPassword' && setFocused(true)}
        focused={focused.toString()} // focus=true
      />
      <S.InputErrorMSG focused={focused.toString()}>{errorMessage}</S.InputErrorMSG>
    </S.SingUpInputWrapper>
  );
}

export default SignupInput;
