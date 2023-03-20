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
  console.log('values', values);
  // 1. values 배열에서 각 메뉴의 amount 값을 추출하여 새로운 배열을 만듦

  // 2. 가장 많이 팔린 메뉴의 amount 값을 구함
  // console.log('Object.values(amountsById)', Object.values(amountsById));

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
