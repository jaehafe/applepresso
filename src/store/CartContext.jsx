import React, { createContext } from 'react';

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  discountAmount: 0,
  discountedAmount: 0,
  totalQuantity: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  removeCheckedItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
