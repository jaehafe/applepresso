import React, { useEffect, useState } from 'react';
import { axiosFirebase } from '../constants/axios';

function useGetMenu(url = '') {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchMenu = async () => {
    try {
      setLoading(true);
      const res = await axiosFirebase.get(`${url}.json`);
      const menuArr = Object.values(res.data);
      console.log('menuArr', menuArr);

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

  return { data, loading, error };
}

export default useGetMenu;
