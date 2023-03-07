import React, { useState } from 'react';
import * as S from './MainNav.style';
import { BiBook } from 'react-icons/bi';
import styled from 'styled-components';

const ListItem = [
  {
    id: 1,
    name: '홈',
    icon: S.StyledRiHomeLine,
    active: false,
  },
  {
    id: 2,
    name: '멤버십',
    icon: S.StyledBsPerson,
    active: false,
  },
  {
    id: 3,
    name: '주문',
    icon: S.StyledBiBook,
    active: false,
  },
  {
    id: 4,
    name: '스토리',
    icon: S.StyledBsCalendar2Check,
    active: false,
  },
  {
    id: 5,
    name: '전체',
    icon: S.StyledTbBorderAll,
    active: false,
  },
];

function MainNav() {
  const [activeNav, setActiveNav] = useState(1);

  return (
    <S.Container>
      <S.Lists>
        {ListItem.map((item) => (
          <S.List
            key={item.id}
            // active={item.id === activeNav}
            onClick={() => setActiveNav(item.id)}
          >
            <S.ItemWrapper>
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
