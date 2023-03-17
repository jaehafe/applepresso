import React from 'react';
import { Link } from 'react-router-dom';
import PayRedirect from '../../components/PayRedirect/PayRedirect';
import fail from '../../assets/fail.json';

const Props = {
  title: '결제 실패',
  aniName: fail,
  message: '주문 내역 가기',
};

function PaymentFail() {
  return (
    <>
      <PayRedirect {...Props} />;
    </>
  );
}

export default PaymentFail;
