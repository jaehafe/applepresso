import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import PayRedirect from '../../components/PayRedirect/PayRedirect';
import { LoginContext } from '../../contexts/LoginContextProvider';
import useKakaoPayApprove from '../../hooks/useKakaoPayApprove';
import loading_payment from '../../assets/loading_payment.json';

const Props = {
  title: '결제 진행중...',
  aniName: loading_payment,
};

function PaymentWaiting() {
  const navigate = useNavigate();
  const { currentUser } = useContext(LoginContext);
  const { postKakaoPayApprove, kakaoPayApproveSuccess } = useKakaoPayApprove();
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

  useEffect(() => {
    if (kakaoPayApproveSuccess) {
      setTimeout(() => {
        navigate('/paymentSuccess');
      }, 3000);
    }
  }, [kakaoPayApproveSuccess]);

  return (
    <>
      <PayRedirect {...Props} />;
    </>
  );
}

export default PaymentWaiting;
