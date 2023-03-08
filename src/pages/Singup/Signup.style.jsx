import { BsArrowLeft } from 'react-icons/bs';
import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  border: 1px solid;
`;

export const StyledBsArrowLeft = styled(BsArrowLeft)`
  font-size: 24px;
  color: #333;
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  padding: 0 20px;
  font-size: 20px;
`;

export const NavigateTitle = styled.h3`
  font-weight: 400;
  margin-left: 16px;
`;

export const MainWrapper = styled.div`
  margin-top: 80px;
  height: 600px;
  padding: 0 20px;
`;
export const HeroNum = styled.div`
  width: 30px;
  color: var(--main-color);
  font-size: 26px;
  font-weight: bold;
  border-bottom: 3px solid;
`;
export const HeroTitle = styled.h1`
  margin-top: 20px;
  font-size: 26px;
  line-height: 40px;
`;
export const HeroDesc = styled.p`
  margin-top: 16px;
  line-height: 26px;
  color: #d7a1b5;
`;
export const HeroIMG = styled.div`
  height: 300px;
  overflow: hidden;
`;

export const Button = styled.button`
  width: 100%;
  height: 50px;
  margin-top: 180px;
  color: #fff;
  background-color: var(--main-color);
`;

// export const mainLogo = styled();

export const LoginForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-top: 20px;
`;

const FormButton = styled.button`
  border: 1px solid;
  width: 100%;
  height: 40px;
  border-radius: 6px;
`;

export const SignButton = styled.button`
  border-bottom: 2px solid var(--main-color);
`;

export const ProfileWrapper = styled.div`
  display: flex;
  margin-top: 20px;
`;

export const Label = styled.label`
  font-size: 12px;
  color: gray;
`;

export const SelectButton = styled.input`
  color: #d7a1b5;
`;

export const ProfileIMGWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* align-items: center; */
  margin-left: 20px;
`;

export const ProfileFigure = styled.figure`
  margin-top: 20px;
  width: 150px;
  height: 150px;
  border: 1px solid var(--main-color);
  border-radius: 6px;
  img {
    object-fit: contain;
  }
`;
