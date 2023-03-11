import React, { createContext } from 'react';

const CartContext = createContext({
  items: [],
  totalAmount: 0,
  total: {
    total: 0,
    totalQty: 0,
    originalPrices: [],
    discountPrices: [],
    discountedPrices: [],
  },
  addItem: (item) => {},
  removeItem: (id) => {},
  removeCheckedItem: (id) => {},
  clearCart: () => {},
});

export default CartContext;
