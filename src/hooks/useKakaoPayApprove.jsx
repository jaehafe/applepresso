import axios from 'axios';
import React, { useContext, useState } from 'react';
import { LoginContext } from '../contexts/LoginContextProvider';
import { kakaoPayConfig } from './useKakaoPay';

function useKakaoPayApprove() {
  const [approveData, setApproveData] = useState(null);
  const [kakaoPayApproveErr, setKakaoPayApproveErr] = useState(false);
  const [kakaoPayApproveLoading, setKakaoPayApproveLoading] = useState(false);
  const [kakaoPayApproveSuccess, setKakaoPayApproveSuccess] = useState(false);

  const postKakaoPayApprove = async (data) => {
    const params = new URLSearchParams(data);
    try {
      setKakaoPayApproveLoading(true);
      const res = await axios.post(
        'https://kapi.kakao.com/v1/payment/approve',
        params.toString(),
        kakaoPayConfig
      );
      console.log(res);
      console.log(res.data);
      localStorage.setItem('res.data', JSON.stringify(res.data));
      // window.location.href = '/success'
      setApproveData(res.data);
    } catch (err) {
      console.log(err);
      setKakaoPayApproveErr(err);
    } finally {
      setKakaoPayApproveLoading(false);
      setKakaoPayApproveSuccess(true);
    }
  };

  return {
    postKakaoPayApprove,
    kakaoPayApproveErr,
    kakaoPayApproveLoading,
    kakaoPayApproveSuccess,
    approveData,
  };
}

export default useKakaoPayApprove;
