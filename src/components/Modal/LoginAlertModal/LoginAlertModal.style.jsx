import styled from 'styled-components';
import { AiOutlineSmile } from 'react-icons/all';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 14;
  background-color: rgba(0, 0, 0, 0.5);
`;

export const Container = styled.div`
  position: fixed;
  z-index: 15;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 420px;
  height: 30%;
  border-radius: 20px;
  background-color: #fff;
`;

//
export const ModalTop = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const Title = styled.div`
  font-size: 26px;
  text-align: center;
  font-weight: 600;
`;

export const ModalHeroContainer = styled.div`
  margin-top: 30px;
  padding: 0 40px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
export const ModalHeroWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  gap: 10px;
`;
export const ModalHero = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
export const StyledAiOutlineSmile = styled(AiOutlineSmile)`
  font-size: 30px;
  color: grey;
`;
export const HeroTitle = styled.div`
  font-size: 23px;
  font-weight: 500;
`;
export const HeroSubtitle = styled.div`
  color: var(--subtitle-color);
  font-size: 18px;
`;

// 버튼
export const ButtonWrapper = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 80px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: space-between;
  padding: 20px;
  background-color: #f6f6f6;
  border-radius: 0px 0px 20px 20px;
  font-size: 20px;
`;
export const CancelButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid var(--division);
`;
export const SelectButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  color: red;
`;
