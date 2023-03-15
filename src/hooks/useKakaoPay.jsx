import React, { useCallback, useState } from 'react';
import axios from 'axios';

// const config = {
//   headers: {
//     Authorization: 'KakaoAK bc3591e0443470709f4c9fb1fb3157ff',
//     'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
//   },
// };
const config = {
  next_redirect_pc_url: '',
  tid: '',
  params: {
    cid: 'TC0ONETIME',
    partner_order_id: 'partner_order_id',
    partner_user_id: 'partner_user_id',
    item_name: '동대문엽기떡볶이',
    quantity: 1,
    total_amount: 22000,
    vat_amount: 0,
    tax_free_amount: 0,
    approval_url: 'http://localhost:3000',
    fail_url: 'http://localhost:3000',
    cancel_url: 'http://localhost:3000',
  },
};
// const { params } = config;

function useKakaoPay() {
  const [kakaoPayErr, setKakaoPayErr] = useState(false);
  const [kakaoPayLoading, setKakaoPayLoading] = useState(false);
  const [kakaoPaySuccess, setKakaoPaySuccess] = useState(false);
  const [kakaopayment, setKakaoPayment] = useState(null);

  const postKakaoPay = useCallback(async (data) => {
    const params = new URLSearchParams(data);
    try {
      setKakaoPaySuccess(false);
      setKakaoPayLoading(true);
      const res = await axios.post('https://kapi.kakao.com/v1/payment/ready', null, {
        params,
        headers: {
          Authorization: `KakaoAK dd30417e021280bcc5ceb5eaf45e2f03`,
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
        },
      });
      // setKakaoPayment(res.data);
      console.log(res);
    } catch (err) {
      console.log(err);
      setKakaoPayErr(err);
    } finally {
      setKakaoPayLoading(false);
      setKakaoPaySuccess(true);
    }
  }, []);
  return { kakaopayment, kakaoPayLoading, kakaoPayErr, postKakaoPay, kakaoPaySuccess };
}

export default useKakaoPay;
