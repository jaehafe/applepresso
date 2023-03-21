import React, { useCallback, useContext, useEffect, useState } from 'react';
import { axiosFirebase } from '../constants/axios';
import { LoginContext } from '../contexts/LoginContextProvider';

function useGetOrderedMenu(url = '') {
  const { currentUser } = useContext(LoginContext);

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

      /** 현재 로그인한 유저가 주문한 메뉴 */
      const currentUserOrder = menuArr.filter(
        (items) => items.value?.user?.email === currentUser?.user?.email
      );

      /** 최근순으로 정렬 */
      const sortedOrders = currentUserOrder.sort(
        (a, b) => new Date(b.value.orderDate) - new Date(a.value.orderDate)
      );

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

  const refetchData = useCallback(() => {
    fetchOrderedMenu();
  }, [fetchOrderedMenu]);

  return { data, loading, error, refetchData };
}

export default useGetOrderedMenu;
