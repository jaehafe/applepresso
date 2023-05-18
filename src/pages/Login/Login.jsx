import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Login.style';
import Logo from '../../assets/banapressoLogo.png';
import { LoginContext } from '../../contexts/LoginContextProvider';
import SignupInput from '../../components/SignupInput/SignupInput';

function SignUp() {
  const { login } = useContext(LoginContext);

  const [values, setValues] = useState({ email: '', password: '' });
  console.log(values);

  const inputs = [
    {
      id: 1,
      name: 'email',
      type: 'email',
      placeholder: '이메일',
      errorMessage: '유효한 이메일을 입력해주세요.',
      label: '이메일',
      required: true,
    },
    {
      id: 2,
      name: 'password',
      type: 'password',
      placeholder: '비밀번호',
      errorMessage: '비밀번호가 틀렸습니다.',
      label: '비밀번호',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
  ];

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoToSignup = () => {
    navigate('/signup');
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log('e.target.name: ', e.target.name);
  };

  const handleLogin = async () => {
    const {
      user: { displayName, email, profileImg },
    } = await login(values);
    console.log('handleLogin displayName', displayName);

    navigate('/main/home');
  };

  return (
    <S.Container>
      <S.Header>
        <S.StyledBsArrowLeft onClick={handleGoBack} />
        <S.NavigateTitle>바나프레소 회원가입/로그인</S.NavigateTitle>
      </S.Header>
      <S.MainWrapper>
        <img src={Logo} alt="" />
        <S.HeroTitle>
          어서오세요,
          <br />
          바나프레소입니다.
        </S.HeroTitle>
        <S.HeroDesc>바나프레소 서비스 이용을 위해 로그인을 해주세요.</S.HeroDesc>
        <S.LoginForm>
          {inputs.map((input) => {
            return <SignupInput key={input.id} {...input} value={values[input.name] || ''} onChange={onChange} />;
          })}
        </S.LoginForm>
        <S.HeroDesc>회원이 아니신가요?</S.HeroDesc>
        <S.SignButton onClick={handleGoToSignup}>회원가입 하러 가기</S.SignButton>
      </S.MainWrapper>
      <S.Button onClick={handleLogin}>로그인</S.Button>
    </S.Container>
  );
}

export default SignUp;
