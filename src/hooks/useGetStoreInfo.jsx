import React, { useEffect, useState } from 'react';
import { axiosFirebase } from '../constants/axios';

function useGetStoreInfo(url = '') {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchStore = async () => {
    try {
      setLoading(true);
      const res = await axiosFirebase.get(`${url}.json`);
      const StoreArr = Object.values(res.data);

      setData(StoreArr);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStore();
  }, [url]);

  return { data, loading, error };
}

export default useGetStoreInfo;
