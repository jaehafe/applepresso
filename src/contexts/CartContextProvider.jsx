import React, { createContext, useEffect, useState } from 'react';
import { axiosInstance } from '../constants/axios';
import { requestLogin } from '../constants/request';

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const [currentUser, setCurrentUser] = useState();

  const login = async (info) => {
    const data = await requestLogin(info);
    setCurrentUser(data);
    return data;
  };

  useEffect(() => {
    localStorage.setItem('BANA_USER', JSON.stringify(currentUser));
  }, [currentUser]);

  return <CartContext.Provider>{children}</CartContext.Provider>;
}

export default CartContextProvider;
