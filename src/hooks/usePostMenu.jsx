import React, { useCallback, useState } from 'react';
import { axiosFirebase } from '../constants/axios';

function usePostMenu(url) {
  const [data, setData] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const postMenu = useCallback(async (info) => {
    try {
      setLoading(true);
      const res = await axiosFirebase.post(`${url}.json`, {
        id: info.id,
        title: info.title,
        amount: info.amount,
        price: info.price,
        thumbnail: info.thumbnail,
        discountRate: info.discountRate,
        isChecked: info.isChecked,
      });
      setData(res.data);
    } catch (err) {
      console.log(err);
      setError(err);
    } finally {
      setLoading(false);
    }
  }, []);

  // useEffect(() => {
  //   postMenu();
  // }, [postMenu]);
  return { data, loading, error, postMenu };
}

export default usePostMenu;
