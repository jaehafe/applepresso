import React, { useEffect, useState } from 'react';
import { axiosFirebase } from '../constants/axios';

function useGetOrderedMenu(url = '') {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchOrderedMenu = async () => {
    try {
      setLoading(true);
      const res = await axiosFirebase.get(`${url}.json`);
      const orderedMenuArr = Object.entries(res.data);
      const menuArr = orderedMenuArr.map(([key, value]) => {
        return { id: key, value };
      });
      const sortedOrders = menuArr.sort(
        (a, b) => new Date(b.value.orderDate) - new Date(a.value.orderDate)
      );
      console.log(sortedOrders);
      setData(sortedOrders);
    } catch (err) {
      console.log(err);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchOrderedMenu();
  }, [url]);

  return { data, loading, error };
}

export default useGetOrderedMenu;
