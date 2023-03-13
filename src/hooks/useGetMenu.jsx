import React, { useEffect, useState } from 'react';
import { axiosFirebase } from '../constants/axios';

function useGetMenu() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchMenu = async () => {
    try {
      setLoading(true);
      const res = await axiosFirebase.get('/menu.json');
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
  }, []);

  return { data, loading, error };
}

export default useGetMenu;
