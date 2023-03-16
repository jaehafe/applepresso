import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
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

  useEffect(() => {
    postKakaoPayApprove(kakaoPayApproveData);
  }, []);

  return (
    <S.Container>
      결제 완료!<Link to="/main/home">주문 내역 가기</Link>
    </S.Container>
  );
}

export default Payment;
