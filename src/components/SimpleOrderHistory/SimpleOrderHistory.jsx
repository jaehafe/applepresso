import React, { useEffect, useState } from 'react';
import * as S from './SimpleOrderHistory.style';
import useGetOrderedMenu from '../../hooks/useGetOrderedMenu';
import Loading from '../Loading.jsx/Loading';

function SimpleOrderHistory() {
  const { data, loading, error, refetchData } = useGetOrderedMenu('/pay123');
  if (loading) {
    return <Loading />;
  }
  if (error) {
    return (
      <div style={{ cursor: 'pointer' }} onClick={() => refetchData()}>
        다시 시도하기
      </div>
    );
  }
  const values = data.map((item) => {
    return item.value.orderDetail;
  });
  const updatedFrequentMenus = values.map((item) => {
    // const { amount, id, thumbnail, title } = item;
    return { item: item.amount };
  });

  console.log('updatedFrequentMenus', updatedFrequentMenus);

  return (
    <S.AddEasyOrderButton>
      <S.AddEasyOrderList>
        <S.StyledFaRegHandPointer />
        <S.AddEasyOrderDesc>주문 내역이 아직 없네요.</S.AddEasyOrderDesc>
      </S.AddEasyOrderList>
      <S.AddEasyOrderExtraListButton>+</S.AddEasyOrderExtraListButton>
    </S.AddEasyOrderButton>
  );
}

export default SimpleOrderHistory;
