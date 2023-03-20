import React, { useState } from 'react';
import * as S from './NearbyStores.style';

import StoreInfoContainer from '../StoreInfoContainer/StoreInfoContainer';
import useGetStoreInfo from '../../hooks/useGetStoreInfo';
import DetailStoreModal from '../Modal/DetailStoreModal/DetailStoreModal';

function NearbyStores() {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [selectedStore, setSelectedStore] = useState({});

  const { data } = useGetStoreInfo('/store');

  const handleOpenDetailStoreModal = (store) => {
    setIsOpenModal(true);
    setSelectedStore(store);
  };

  return (
    <S.Container>
      {isOpenModal && selectedStore && (
        <DetailStoreModal
          isOpenModal={isOpenModal}
          setIsOpenModal={setIsOpenModal}
          store={selectedStore}
        />
      )}
      {data.map((store) => {
        return (
          <div key={store.id} onClick={() => handleOpenDetailStoreModal(store)}>
            <StoreInfoContainer
              store={store}
              isOpenModal={isOpenModal}
              setIsOpenModal={setIsOpenModal}
            />
          </div>
        );
      })}
    </S.Container>
  );
}

export default NearbyStores;
