import axios from 'axios';
import React, { useContext, useState } from 'react';
import { LoginContext } from '../contexts/LoginContextProvider';
import { kakaoPayConfig } from './useKakaoPay';

function useKakaoPayApprove() {
  const [approveData, setApproveData] = useState(null);
  const { currentUser } = useContext(LoginContext);
  const searchParams = new URLSearchParams(window.location.search);
  const pg_token = searchParams.get('pg_token');

  const postKakaoPayApprove = async (data) => {
    const params = new URLSearchParams(data);
    try {
      const res = await axios.post(
        'https://kapi.kakao.com/v1/payment/approve',
        params.toString(),
        kakaoPayConfig
      );
      console.log(res);
      console.log(res.data);
      setApproveData(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return { postKakaoPayApprove, approveData };
}

export default useKakaoPayApprove;
