import React, { createContext } from 'react';

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  removeCheckedItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
