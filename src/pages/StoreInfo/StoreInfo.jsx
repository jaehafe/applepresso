import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import * as S from './StoreInfo.style';
import NearbyStores from '../../components/NearbyStores/NearbyStores';
import FrequentStores from '../../components/NearbyStores/FrequentStores';
import GetAllStoreMapModal from '../../components/Modal/KakaoMapModal/GetAllStoreMapModal/GetAllStoreMapModal';
import useGetStoreInfo from '../../hooks/useGetStoreInfo';

const StoreInfoNavItem = [
  {
    key: 'nearbyStore',
    component: <NearbyStores />,
    name: '가까운 매장',
    active: false,
  },
  {
    key: 'frequentStore',
    component: <FrequentStores />,
    name: '자주가는 매장',
    active: false,
  },
];

function StoreInfo() {
  const [isOpenAllStoreModal, setIsOpenAllStoreModal] = useState(false);
  const [activeNav, setActiveNav] = useState('nearbyStore');
  const { data: storeData } = useGetStoreInfo('/store');

  const navigate = useNavigate();
  const handleToBack = () => {
    navigate(-1);
  };

  return (
    <S.Container>
      {isOpenAllStoreModal && (
        <GetAllStoreMapModal
          storeData={storeData}
          isOpenAllStoreModal={isOpenAllStoreModal}
          setIsOpenAllStoreModal={setIsOpenAllStoreModal}
        />
      )}
      <S.HeaderContainer>
        <S.HeaderWrapper>
          <S.HeaderTitleWrapper>
            <S.StyledBsArrowLeft onClick={handleToBack} />
            <S.HeaderTitle>주변 매장</S.HeaderTitle>
          </S.HeaderTitleWrapper>
          <S.IconWrapper>
            <S.StyledFiSearch />
            <S.StyledFiMapPin onClick={() => setIsOpenAllStoreModal(true)} />
          </S.IconWrapper>
        </S.HeaderWrapper>
      </S.HeaderContainer>
      <S.HeaderNavContainer>
        <S.HeaderNavWrapper>
          {StoreInfoNavItem.map((item) => (
            <NavLink key={item.key} onClick={() => setActiveNav(item.key)}>
              {({ isActive }) => (
                <S.HeaderNavTitle isActive={isActive}>{item.name}</S.HeaderNavTitle>
              )}
            </NavLink>
          ))}
        </S.HeaderNavWrapper>
      </S.HeaderNavContainer>
      {activeNav === 'nearbyStore' ? <NearbyStores /> : <FrequentStores />}
    </S.Container>
  );
}

export default StoreInfo;

{
  /* <S.HeaderNavTitle>가까운 매장</S.HeaderNavTitle>
          <S.HeaderNavTitle>자주가는 매장</S.HeaderNavTitle> */
}
