import styled from 'styled-components';
import {
  AiOutlineClockCircle,
  IoIosArrowForward,
  FiMapPin,
  MdOutlineGpsFixed,
} from 'react-icons/all';

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
export const Thumbnail = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
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
export const StyledFiMapPin = styled(FiMapPin)`
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
export const HeroMap = styled.a`
  display: flex;
  justify-content: space-between;
  color: grey;
  width: 130px;
  padding-bottom: 3px;
  border-bottom: 1px solid grey;
`;

export const StyledIoIosArrowForward = styled(IoIosArrowForward)``;
export const StyledAiOutlineClockCircle = styled(AiOutlineClockCircle)`
  color: grey;
`;
// export const Container = styled.div``
// export const Container = styled.div``
// export const Container = styled.div``
// export const Container = styled.div``

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

export const KakaoMapSearch = styled.div`
  position: absolute;
  right: 20px;
  top: 280px;
  background-color: #fff;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);

  &:hover {
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.7);
  }
`;
export const StyledMdOutlineGpsFixed = styled(MdOutlineGpsFixed)`
  font-size: 26px;
`;
