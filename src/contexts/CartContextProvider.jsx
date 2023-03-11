import React, { createContext, useEffect, useReducer, useState } from 'react';
import { axiosInstance } from '../constants/axios';
import { requestLogin } from '../constants/request';
import CartContext from '../store/CartContext';

const defaultCartState = {
  items: [],
  total: { totalPrice: 0, totalQty: 0, totalDiscountRate: 0 },
  totalAmount: 0,
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

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
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

    console.log('action.id.price', action.id.price);
    // 총 가격
    const updatedTotalAmount = state.totalAmount - 1 * existingItem.price;

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }

  // REMOVE CHECKED ITEM
  if (action.type === 'REMOVECHECKEDITEM') {
    const existingItemIndex = state.items.findIndex((item) => item.id === action.id);
    const existingItem = state.items[existingItemIndex];

    let updatedItems;

    if (existingItem) {
      updatedItems = state.items.filter((item) => item.id !== action.id);

      // 총 가격
      const updatedTotalAmount =
        state.totalAmount - existingItem.amount * existingItem.price;

      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
      };
    }

    return state;
  }
};

function CartContextProvider({ children }) {
  const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);
  const [total, setTotal] = useState({ totalPrice: 0, totalQty: 0 });

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

  /** 총 가격, 수량 렌더링 함수 */
  const calculateTotalPriceQty = () => {
    const { totalPrice, totalQty } = cartState.items.reduce(
      (acc, menu) => {
        acc.totalPrice += menu.price * menu.amount;
        acc.totalQty += menu.amount;
        return acc;
      },
      // 초기값
      { totalPrice: 0, totalQty: 0 }
    );
    // total 상태에 저장
    setTotal({ totalPrice, totalQty });
    console.log('totalPrice', totalPrice);
    console.log('totalQty', totalQty);

    // useEffect 사용을 위한 return 값
    return {
      totalPrice: totalPrice.toLocaleString(),
      totalQty,
    };
  };

  useEffect(() => {
    const { totalPrice, totalQty } = calculateTotalPriceQty();
    setTotal({ totalPrice, totalQty });
  }, [cartState.items]);

  //

  const cartContext = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    total: {
      totalPrice: total.totalPrice,
      totalQty: total.totalQty,
      totalDiscountRate: total.totalDiscountRate,
    },
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    removeCheckedItem: removeCheckedItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>;
}

export default CartContextProvider;
