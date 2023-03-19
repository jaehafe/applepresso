import React from 'react';
import * as S from './NearbyStores.style';

import StoreInfoContainer from '../StoreInfoContainer/StoreInfoContainer';
import useGetStoreInfo from '../../hooks/useGetStoreInfo';

function NearbyStores() {
  const { data } = useGetStoreInfo('/store');

  return (
    <S.Container>
      {data.map((item) => {
        return (
          <div key={item.id}>
            <StoreInfoContainer item={item} />
          </div>
        );
      })}
    </S.Container>
  );
}

export default NearbyStores;
