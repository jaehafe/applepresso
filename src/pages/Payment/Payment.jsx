import React, { useContext } from 'react';
import { LoginContext } from '../../contexts/LoginContextProvider';
import useKakaoPayApprove from '../../hooks/useKakaoPayApprove';
import * as S from './Payment.style';

function Payment() {
  const { currentUser } = useContext(LoginContext);
  const { postKakaoPayApprove } = useKakaoPayApprove();
  const searchParams = new URLSearchParams(window.location.search);
  const pg_token = searchParams.get('pg_token');
  const tid = JSON.parse(localStorage.getItem(`${currentUser?.user.email}-tid`));
  console.log('tid', tid);
  console.log('pg_token', pg_token);

  const kakaoPayApproveData = {
    cid: 'TC0ONETIME',
    tid,
    partner_order_id: 'partner_order_id',
    partner_user_id: 'partner_user_id',
    pg_token,
  };

  postKakaoPayApprove(kakaoPayApproveData);
  // localStorage.setItem(`${currentUser?.user.email}-pgToken`, JSON.stringify(pgToken));
  return <S.Container>123</S.Container>;
}

export default Payment;
