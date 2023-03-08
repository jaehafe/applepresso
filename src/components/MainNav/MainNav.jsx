import React, { useState } from 'react';
import * as S from './MainNav.style';
import { BiBook } from 'react-icons/bi';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const ListItem = [
  {
    id: 1,
    navigate: '/main/home',
    name: '홈',
    icon: S.StyledRiHomeLine,
    active: false,
  },
  {
    id: 2,
    navigate: '/',
    name: '멤버십',
    icon: S.StyledBsPerson,
    active: false,
  },
  {
    id: 3,
    navigate: '/main/order/recommend',
    name: '주문',
    icon: S.StyledBiBook,
    active: false,
  },
  {
    id: 4,
    navigate: '/',
    name: '스토리',
    icon: S.StyledBsCalendar2Check,
    active: false,
  },
  {
    id: 5,
    navigate: '/',
    name: '전체',
    icon: S.StyledTbBorderAll,
    active: false,
  },
];

function MainNav() {
  const [activeNav, setActiveNav] = useState(1);
  const navigate = useNavigate();

  // main/order
  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <S.Container>
      <S.Lists>
        {ListItem.map((item) => (
          <S.List
            key={item.id}
            // active={item.id === activeNav}
            onClick={() => setActiveNav(item.id)}
          >
            <S.ItemWrapper onClick={() => handleNavigate(item.navigate)}>
              <S.StyledICON as={item.icon} $active={item.id === activeNav} />
              <S.NavName $active={item.id === activeNav}>{item.name}</S.NavName>
            </S.ItemWrapper>
          </S.List>
        ))}
      </S.Lists>
    </S.Container>
  );
}

export default MainNav;
