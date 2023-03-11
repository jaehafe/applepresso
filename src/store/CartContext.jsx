import React, { createContext } from 'react';

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  total: { totalPrice: 0, totalQty: 0, totalDiscountRate: 0 },
  addItem: (item) => {},
  removeItem: (id) => {},
  removeCheckedItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
