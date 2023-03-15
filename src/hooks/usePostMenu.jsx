import React, { useCallback, useState } from 'react';
import { axiosFirebase } from '../constants/axios';

function usePostMenu(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const postMenu = useCallback(async ({ ...info }) => {
    try {
      setSuccess(false);
      setLoading(true);
      const res = await axiosFirebase.post(`${url}.json`, {
        user: info.user,
        orderDetail: info.orderDetail,
        orderDate: info.orderDate,
        orderType: info.orderType,
        orderRequest: info.orderRequest,
      });
      setData(res.data);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
      setSuccess(true);
    }
  }, []);

  return { data, loading, error, postMenu, success };
}

export default usePostMenu;
