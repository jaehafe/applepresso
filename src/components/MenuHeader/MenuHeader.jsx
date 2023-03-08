import React, { useState } from 'react';
import * as S from './MenuHeader.style';
import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import { useNavigate } from 'react-router-dom';

const NavLists = [
  {
    navigate: 'coffee',
    id: 'COFFEE',
    name: 'COFFEE',
    active: false,
  },
  {
    navigate: 'recommend',
    id: 'RECOMMEND',
    name: '추천',
    active: true,
  },
  {
    navigate: 'setMenu',
    id: 'SET_MENU',
    name: 'SET MENU',
    active: false,
  },

  {
    navigate: 'milkTeaLattee',
    id: 'MILK_TEA_LATTEE',
    name: 'MILK TEA & LATTEE',
    active: false,
  },
  {
    navigate: 'juiceDrink',
    id: 'JUICE_DRINK',
    name: 'JUICE & DRINK',
    active: false,
  },
  {
    navigate: 'banaccinoSmoothie',
    id: 'BANACCINO_SMOOTHIE',
    name: 'BANACCINO & SMOOTHIE',
    active: false,
  },
  {
    navigate: 'teaAde',
    id: 'TEA_ADE',
    name: 'TEA & ADE',
    active: false,
  },
  {
    navigate: 'bread',
    id: 'BREAD',
    name: 'BREAD',
    active: false,
  },
];

function MenuHeader() {
  const [activeNav, setActiveNav] = useState('coffee');
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    // navigate(path);
    setActiveNav(path);
  };
  return (
    <>
      <S.Container>
        <S.HeaderWrapper>
          <S.HeaderTitle>주문</S.HeaderTitle>
          <S.StyledFiSearch />
        </S.HeaderWrapper>
      </S.Container>
      <S.HeaderNav
        modules={[A11y]}
        spaceBetween={20}
        slidesPerView={4}
        pagination={{
          clickable: true,
          draggable: true,
          // bulletClass: CustomBullet,
        }}
      >
        {NavLists.map((item) => {
          return (
            <S.NavList
              style={{ width: 'auto' }}
              key={item.id}
              onClick={() => handleNavigate(item.navigate)}
            >
              <S.NavTitle $active={item.navigate === activeNav}>{item.name}</S.NavTitle>
            </S.NavList>
          );
        })}
      </S.HeaderNav>
    </>
  );
}

export default MenuHeader;
