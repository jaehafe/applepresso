import React, { useCallback, useContext, useState } from 'react';
import axios from 'axios';
import { LoginContext } from '../contexts/LoginContextProvider';

const kakaoPayConfig = {
  headers: {
    Authorization: 'KakaoAK dd30417e021280bcc5ceb5eaf45e2f03',
    'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',
  },
};

function useKakaoPay() {
  const { currentUser } = useContext(LoginContext);
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
        kakaoPayConfig
      );
      setKakaoPayment(res.data);
      localStorage.setItem(
        `${currentUser?.user.email}-tid`,
        JSON.stringify(res.data.tid)
      );
      window.location.href = res.data.next_redirect_pc_url;
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
