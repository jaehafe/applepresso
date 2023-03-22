import React, { useState } from 'react';
import * as S from './MenuHeader.style';
import { A11y } from 'swiper';
import 'swiper/css/pagination';
import 'swiper/css';
import { NavLink } from 'react-router-dom';
import SelectStoreNav from '../SelectStoreNav/SelectStoreNav';
import SearchMenuModal from '../Modal/SearchMenuModal/SearchMenuModal';

const NavLists = [
  {
    navigate: 'recommend',
    id: 'RECOMMEND',
    name: '추천',
    active: true,
  },
  {
    navigate: 'coffee',
    id: 'COFFEE',
    name: 'COFFEE',
    active: false,
  },
  {
    navigate: 'setMenu',
    id: 'SET_MENU',
    name: 'SET MENU',
    active: false,
  },
  {
    navigate: 'milkTeaLatte',
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
  const [isOpenSearchMenuModal, setIsOpenSearchMenuModal] = useState(false);

  const handleOpenSearchMenuModal = () => {
    setIsOpenSearchMenuModal(true);
  };

  return (
    <>
      {isOpenSearchMenuModal && (
        <SearchMenuModal
          isOpenSearchMenuModal={isOpenSearchMenuModal}
          setIsOpenSearchMenuModal={setIsOpenSearchMenuModal}
        />
      )}
      <S.Container>
        <S.HeaderWrapper>
          <S.HeaderTitle>주문</S.HeaderTitle>
          <S.StyledFiSearch onClick={handleOpenSearchMenuModal} />
        </S.HeaderWrapper>
      </S.Container>
      <S.HeaderNav
        modules={[A11y]}
        spaceBetween={20}
        slidesPerView={4.3}
        pagination={{
          clickable: true,
          draggable: true,
          // bulletClass: CustomBullet,
        }}
      >
        {NavLists.map((item) => {
          return (
            <S.NavList key={item.id}>
              <NavLink to={item.navigate}>
                {({ isActive }) => (
                  <S.NavTitle $active={isActive}>{item.name}</S.NavTitle>
                )}
              </NavLink>
            </S.NavList>
          );
        })}
      </S.HeaderNav>
      {/* 매장 선택 nav */}
      <SelectStoreNav top="130px" />
    </>
  );
}

export default MenuHeader;
