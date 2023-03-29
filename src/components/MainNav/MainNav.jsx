import React from 'react';
import * as S from './MainNav.style';
import { NavLink } from 'react-router-dom';
import { errorNotify } from '../../hooks/useToast';

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
    navigate: '/main/myPage',
    name: '마이페이지',
    icon: S.StyledTbBorderAll,
    active: false,
  },
];

function MainNav() {
  const handleNavigate = (e, item) => {
    if (item.name === '스토리' || item.name === '멤버십') {
      e.preventDefault();

      errorNotify(`${item.name} 페이지는 서비스 준비중입니다.`);
      return;
    }
  };

  return (
    <S.Container>
      <S.Lists>
        {ListItem.map((item) => (
          <S.List key={item.id}>
            <NavLink to={item.navigate} onClick={(e) => handleNavigate(e, item)}>
              {({ isActive }) => (
                <S.ItemWrapper>
                  <S.StyledICON as={item.icon} $active={isActive} />
                  <S.NavName $active={isActive}>{item.name}</S.NavName>
                </S.ItemWrapper>
              )}
            </NavLink>
          </S.List>
        ))}
      </S.Lists>
    </S.Container>
  );
}

export default MainNav;
