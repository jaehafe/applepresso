import React, { createContext, useEffect, useState } from 'react';
import { axiosInstance } from '../constants/axios';
import { requestLogin } from '../constants/request';

export const CartContext = createContext();

function CartContextProvider({ children }) {
  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
}

export default CartContextProvider;
