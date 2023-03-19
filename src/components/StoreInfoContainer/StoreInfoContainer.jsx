import React from 'react';
import * as S from './StoreInfoContainer.style';
import banner from '../../assets/homeBanner/banner1.jpeg';

function StoreInfoContainer() {
  return (
    <S.StoreWrapper>
      <S.StoreInfoHeader>
        <S.StoreBranch>직영점</S.StoreBranch>
      </S.StoreInfoHeader>
      <S.StoreInfoHero>
        <S.StoreThumbnail src={banner} alt="사진" />
        <S.StoreInfos>
          <S.StoreInfosHeader>
            <S.StoreTitle>회기역사거리점</S.StoreTitle>
            <S.StoreDelivery>배달가능점</S.StoreDelivery>
          </S.StoreInfosHeader>
          <S.StoreInfosParaWrapper>
            <S.StoreAddr>서울특별시 동대문구 회기로 176</S.StoreAddr>
            <S.StoreOpenTime>07:00~23:00</S.StoreOpenTime>
          </S.StoreInfosParaWrapper>
        </S.StoreInfos>
        <S.StoreDistance>4.3km</S.StoreDistance>
      </S.StoreInfoHero>
    </S.StoreWrapper>
  );
}

export default StoreInfoContainer;
