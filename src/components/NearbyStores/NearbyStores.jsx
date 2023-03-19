import React, { useState } from 'react';
import * as S from './NearbyStores.style';

import StoreInfoContainer from '../StoreInfoContainer/StoreInfoContainer';
import useGetStoreInfo from '../../hooks/useGetStoreInfo';
import DetailStoreModal from '../DetailStoreModal/DetailStoreModal';

function NearbyStores() {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const { data } = useGetStoreInfo('/store');

  const handleOpenDetailStoreModal = () => {
    setIsOpenModal(true);
  };

  return (
    <S.Container>
      {isOpenModal && (
        <DetailStoreModal isOpenModal={isOpenModal} setIsOpenModal={setIsOpenModal} />
      )}
      {data.map((item) => {
        return (
          <div key={item.id} onClick={handleOpenDetailStoreModal}>
            <StoreInfoContainer item={item} />
          </div>
        );
      })}
    </S.Container>
  );
}

export default NearbyStores;
