import React, { createContext, useEffect, useReducer, useState } from 'react';
import { axiosInstance } from '../constants/axios';
import { requestLogin } from '../constants/request';
import CartContext from '../store/CartContext';

const defaultCartState = {
  items: [],
  totalAmount: 0,
  discountAmount: 0,
  discountedAmount: 0,
  totalQuantity: 0,
};

const cartReducer = (state, action) => {
  // ADD
  if (action.type === 'ADD') {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    console.log('existingCartItemIndex', existingCartItemIndex);
    console.log('existingCartItem', existingCartItem);

    let updatedItems;
    // 카트에 이미 해당 메뉴가 존재할 때
    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      // 카트에 이미 해당 메뉴가 존재하지 않을 때
      updatedItems = [...state.items, action.item];
    }

    // 총 가격
    const updatedTotalAmount = state.totalAmount + action.item.amount * action.item.price;
    // 할인 가격
    const discountTotalAmount =
      state.discountAmount + action.item.amount * action.item.discountRate;
    // 할인된 가격
    const discountedTotalAmount = state.totalAmount - state.discountAmount;
    console.log('updatedTotalAmount', updatedTotalAmount);
    console.log('discountTotalAmount', discountTotalAmount);
    console.log('discountedTotalAmount', discountedTotalAmount);
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      discountAmount: discountTotalAmount,
      discountedAmount: discountedTotalAmount,
    };
  }
  // REMOVE
  if (action.type === 'REMOVE') {
    const existingItemIndex = state.items.findIndex((item) => item.id === action.id);
    const existingItem = state.items[existingItemIndex];
    console.log('remove existingItem', existingItem);

    let updatedItems;

    if (!existingItem || existingItem.amount === 1) return state;

    if (existingItem.amount > 1) {
      const updatedItem = { ...existingItem, amount: existingItem.amount - 1 };
      updatedItems = [...state.items];
      console.log('updatedItems', updatedItems);
      updatedItems[existingItemIndex] = updatedItem;
    }

    // 총 가격
    const updatedTotalAmount =
      state.totalAmount - existingItem.amount * existingItem.price;
    // 할인 가격
    const discountTotalAmount =
      state.discountAmount - existingItem.price * existingItem.discountRate;
    // 할인된 가격
    const discountedTotalAmount = updatedTotalAmount - discountTotalAmount;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      discountAmount: discountTotalAmount,
      discountedAmount: discountedTotalAmount,
    };
  }

  // REMOVE CHECKED ITEM
  if (action.type === 'REMOVECHECKEDITEM') {
    const existingItemIndex = state.items.findIndex((item) => item.id === action.id);
    const existingItem = state.items[existingItemIndex];

    let updatedItems;
    // updatedItems = [...state.items];
    // updatedItems.filter((item) => item.id !== action.id);

    if (existingItem) {
      // const updatedItem = state.items.filter((item) => item.id !== action.id);
      updatedItems = state.items.filter((item) => item.id !== action.id);
    }

    // 총 가격
    const updatedTotalAmount =
      state.totalAmount - existingItem.amount * existingItem.price;
    // 할인 가격
    const discountTotalAmount =
      state.discountAmount - existingItem.amount * existingItem.price;
    // 할인된 가격
    const discountedTotalAmount = updatedTotalAmount - discountTotalAmount;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      discountAmount: discountTotalAmount,
      discountedAmount: discountedTotalAmount,
    };
  }
};

function CartContextProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
  console.log('cartState', cartState);
  const addItemToCartHandler = (item) => {
    dispatchCartAction({ type: 'ADD', item });
  };

  const removeItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVE', id });
  };

  const removeCheckedItemFromCartHandler = (id) => {
    dispatchCartAction({ type: 'REMOVECHECKEDITEM', id });
  };

  const clearCartHandler = () => {
    dispatchCartAction({ type: 'CLEAR' });
  };

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    removeCheckedItem: removeCheckedItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
}

export default CartContextProvider;
