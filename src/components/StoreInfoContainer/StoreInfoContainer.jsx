import React from 'react';
import * as S from './StoreInfoContainer.style';
import banner from '../../assets/homeBanner/banner1.jpeg';
import DetailStoreModal from '../DetailStoreModal/DetailStoreModal';

function StoreInfoContainer({ store, isOpenModal, setIsOpenModal }) {
  const {
    id,
    image,
    name,
    delivery_available,
    address,
    open_time,
    company_owned,
    distance,
    kakao_map,
  } = store;

  return (
    <S.StoreWrapper>
      <S.StoreInfoHeader>
        <S.StoreBranch>{company_owned === true ? '직영점' : '가맹점'}</S.StoreBranch>
      </S.StoreInfoHeader>
      <S.StoreInfoHero>
        <S.StoreThumbnail src={image} alt={name} />
        <S.StoreInfos>
          <S.StoreInfosHeader>
            <S.StoreTitle>{name}</S.StoreTitle>
            {delivery_available && (
              <S.StoreDelivery>
                {delivery_available === true ? '배달가능점' : ''}
              </S.StoreDelivery>
            )}
          </S.StoreInfosHeader>
          <S.StoreInfosParaWrapper>
            <S.StoreAddr>{address}</S.StoreAddr>
            <S.StoreOpenTime>{open_time}</S.StoreOpenTime>
          </S.StoreInfosParaWrapper>
        </S.StoreInfos>
        <S.StoreDistance>{distance}</S.StoreDistance>
      </S.StoreInfoHero>
    </S.StoreWrapper>
  );
}

export default StoreInfoContainer;
