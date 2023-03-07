import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Signup.style';
import Logo from '../../assets/banapressoLogo.png';
import SignupInput from '../../components/SignupInput/SignupInput';
import { requestSignup } from '../../constants/request';

function Signup() {
  const [values, setValues] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    nickname: '',
    profileIMG: '',
  });

  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };

  const handleGoToSignup = () => {
    navigate('/signup');
  };

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
      errorMessage:
        '비밀번호는 8-20개의 문자여야하며, 최소 1개의 문자, 숫자, 특수문자가 포함되어야 합니다!',
      label: '비밀번호',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,20}$`,
      required: true,
    },
    {
      id: 3,
      name: 'confirmPassword',
      type: 'password',
      placeholder: '비밀번호 확인',
      errorMessage: '비밀번호가 일치하지 않습니다!',
      label: '비밀번호 확인',
      pattern: values.password,
      required: true,
    },
    {
      id: 4,
      name: 'nickname',
      type: 'text',
      placeholder: '닉네임',
      errorMessage: '닉네임은 3-16 글자이어야 하며, 특수문자는 포함하면 안됩니다!',
      label: '닉네임',
      pattern: '^[A-Za-z0-9]{3,16}$',
      required: true,
    },
  ];

  const handleProfileIMG = (e) => {
    console.log('e', e.target.value);
    if (e.target.files) {
      const file = e.target.files[0];
      console.log(file);
      if (!isProfileOversize(file.size)) return;

      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        setValues({ ...values, profileIMG: reader.result });
      };
    }
  };

  const isProfileOversize = (size) => {
    if (size > 1024 * 1024) {
      alert('이미지가 너무 큽니다.');
      return false;
    }
    return true;
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
    console.log('e.target.name: ', e.target.name);
  };

  const handlePostSignupInfo = async () => {
    console.log('values', values);
    await requestSignup(values);
    alert('회원가입이 완료되었습니다. 로그인 화면으로 돌아갑니다.');
    navigate('/login');
  };

  return (
    <S.Container>
      <S.Header>
        <S.StyledBsArrowLeft onClick={handleGoBack} />
        <S.NavigateTitle>바나프레소 회원가입/로그인</S.NavigateTitle>
      </S.Header>
      <S.MainWrapper>
        <img src={Logo} alt="logo" />
        <S.HeroTitle>
          어서오세요,
          <br />
          바나프레소입니다.
        </S.HeroTitle>
        <S.HeroDesc>바나프레소 서비스 이용을 위해 회원가입을 해주세요.</S.HeroDesc>
        <S.LoginForm>
          {inputs.map((input) => {
            return (
              <SignupInput
                key={input.id}
                {...input}
                value={values[input.name] || ''}
                onChange={onChange}
              />
            );
          })}
          <S.ProfileWrapper>
            <S.Label>프로필</S.Label>
            <S.ProfileIMGWrapper>
              <S.SelectButton
                type="file"
                accept=".jpg, .jpeg, .webp, .png, .gif, .svg"
                placeholder="파일선택"
                onChange={handleProfileIMG}
                value=""
              />
              <S.ProfileFigure value={values['profileIMG']}>
                {values['profileIMG'] && (
                  <img width={150} height={150} src={values['profileIMG']} alt="프로필" />
                )}
              </S.ProfileFigure>
            </S.ProfileIMGWrapper>
          </S.ProfileWrapper>
        </S.LoginForm>
      </S.MainWrapper>
      <S.Button onClick={handlePostSignupInfo}>다음</S.Button>
    </S.Container>
  );
}

export default Signup;
