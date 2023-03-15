import React, { useCallback, useState } from 'react';
import axios from 'axios';

const config = {
  headers: {
    Authorization: 'KakaoAK dd30417e021280bcc5ceb5eaf45e2f03',
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  },
};

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
      const res = await axios.post(
        'https://kapi.kakao.com/v1/payment/ready',
        params.toString(),
        config
      );
      setKakaoPayment(res.data);
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
