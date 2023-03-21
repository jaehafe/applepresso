import React, { useEffect, useState } from 'react';
import * as S from './SimpleOrderHistory.style';
import useGetOrderedMenu from '../../hooks/useGetOrderedMenu';
import Loading from '../Loading.jsx/Loading';
import useGetMenu from '../../hooks/useGetMenu';

function SimpleOrderHistory() {
  const { data, loading, error, refetchData } = useGetOrderedMenu('/pay');
  const { data: menuData } = useGetMenu('/menu');
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

  // 주문 횟수를 카운팅
  const countOrders = (values) => {
    let orderCounts = {};

    values.forEach((array) => {
      array.forEach((item) => {
        if (orderCounts[item.id]) {
          orderCounts[item.id].count++;
        } else {
          orderCounts[item.id] = { ...item, count: 1 };
        }
      });
    });

    return orderCounts;
  };

  // 주문 횟수를 기준으로 내림차순 정렬
  const sortByOrders = (orderCounts) => {
    let sortedOrders = Object.values(orderCounts);

    sortedOrders.sort((a, b) => b.count - a.count);

    return sortedOrders;
  };

  const orderCounts = countOrders(values);
  const sortedValues = sortByOrders(orderCounts);

  console.log('orderCounts', orderCounts);
  console.log('sortedValues', sortedValues);

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
