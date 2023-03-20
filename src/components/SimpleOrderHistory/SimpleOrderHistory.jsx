import React, { useEffect, useState } from 'react';
import * as S from './SimpleOrderHistory.style';
import useGetOrderedMenu from '../../hooks/useGetOrderedMenu';

function SimpleOrderHistory() {
  const [frequentMenus, setFrequentMenus] = useState([]);
  const { data } = useGetOrderedMenu('/pay');

  useEffect(() => {
    if (data) {
      const values = data.map((item) => {
        return item.value.orderDetail;
      });
      const updatedFrequentMenus = values.map((item) => {
        const { amount, id, thumbnail, title } = item;
        return { amount, id, thumbnail, title };
      });
      setFrequentMenus(updatedFrequentMenus);
    }
  }, [data]);

  console.log('frequentMenus', frequentMenus);

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
