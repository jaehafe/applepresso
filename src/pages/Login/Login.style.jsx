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
  margin-top: 100px;
  height: 600px;
  padding: 0 20px;
  border: 1px solid;
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
