import React, { useCallback, useEffect, useState } from 'react';
import { axiosFirebase } from '../constants/axios';

function useGetMenu(url = '') {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchMenu = async () => {
    try {
      setError(false);
      setLoading(true);
      const res = await axiosFirebase.get(`${url}.json`);
      const menuArr = Object.values(res.data);

      setData(menuArr);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, [url]);

  const refetchData = useCallback(() => {
    fetchMenu();
  }, [url, fetchMenu]);

  return { data, loading, error, refetchData };
}

export default useGetMenu;
