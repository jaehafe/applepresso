import styled from 'styled-components';
import { RiHomeLine } from 'react-icons/ri';
import { BsPerson } from 'react-icons/bs';
import { BiBook } from 'react-icons/bi';
import { BsCalendar2Check } from 'react-icons/bs';
import { TbBorderAll } from 'react-icons/tb';

export const Container = styled.nav`
  z-index: 10;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 500px;
  height: 80px;
  background-color: #fff;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
  border-top-left-radius: 10px;
  border-top-right-radius: 16px;
`;

export const Lists = styled.ul`
  display: flex;
  justify-content: space-around;
`;

export const List = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 6px;

  cursor: pointer;
`;

export const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
`;

export const StyledRiHomeLine = styled(RiHomeLine)`
  color: #000;
`;

export const StyledBsPerson = styled(BsPerson)`
  color: #000;
`;

export const StyledBiBook = styled(BiBook)`
  color: #000;
`;

export const StyledBsCalendar2Check = styled(BsCalendar2Check)`
  color: #000;
`;

export const StyledTbBorderAll = styled(TbBorderAll)`
  color: #000;
`;

export const StyledICON = styled.img`
  font-size: 30px;
  color: ${(props) => (props.$active ? 'var(--main-color)' : '#9a9292')};
`;

export const NavName = styled.span`
  color: ${(props) => (props.$active ? 'var(--main-color)' : '#000')};
`;
//
