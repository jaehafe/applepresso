import React, { useContext, useEffect } from 'react';
import PayRedirect from '../../components/PayRedirect/PayRedirect';
import success from '../../assets/success.json';

const Props = {
  title: '결제 완료!',
  aniName: success,
  message: '주문 내역 가기',
  navigate: '/orderHistory',
};

function Payment() {
  return (
    <>
      <PayRedirect {...Props} />;
    </>
  );
}

export default Payment;
