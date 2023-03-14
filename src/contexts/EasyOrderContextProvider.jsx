import React, { createContext, useContext, useEffect, useReducer, useState } from 'react';
import { LoginContext } from './LoginContextProvider';

export const EasyOrderContext = createContext({
  title: 'EASYORDER',
  items: [],
  totalAmount: 0,
  total: {
    total: 0,
    totalQty: 0,
    finalPrice: 0,
    originalPrices: [],
    discountPrices: [],
    discountedPrices: [],
  },
  addItem: (item) => {},
  removeItem: (id) => {},
  removeCheckedItem: (id) => {},
  clearCart: (item) => {},
});

const defaultEasyOrderState = {
  title: 'EASYORDER',
  items: [],
  total: {
    total: 0,
    totalQty: 0,
    finalPrice: 0,
    originalPrices: [],
    discountPrices: [],
    discountedPrices: [],
  },
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

  if (action.type === 'CLEAR') {
    return defaultEasyOrderState;
  }

  if (action.type === 'INITIALIZE') {
    return action.easyOrderState;
  }

  return defaultEasyOrderState;
};

function EasyOrderContextProvider({ children }) {
  const { currentUser } = useContext(LoginContext);
  // console.log(currentUser);
  // localStorage.setItem(`${currentUser.user.email}`, JSON.stringify(easyOrderState));
  const [easyOrderState, dispatchCartAction] = useReducer(
    cartReducer,
    defaultEasyOrderState
  );
  const [total, setTotal] = useState({
    total: 0,
    totalQty: 0,
    finalPrice: 0,
    originalPrices: [],
    discountPrices: [],
    discountedPrices: [],
  });

  /** localStorage에 easyOrderState를 저장하는 함수 */
  const saveEasyOrderStateToLocalStorage = (easyOrderState, currentUser) => {
    localStorage.setItem(
      `${currentUser?.user.email}-easyOrder`,
      JSON.stringify(easyOrderState)
    );
  };

  /** localStorage에서 easyOrderState를 불러오는 함수 */
  const getEasyOrderStateFromLocalStorage = (currentUser) => {
    const easyOrderStateFromLocalStorage = localStorage.getItem(
      `${currentUser?.user.email}-easyOrder`
    );
    if (easyOrderStateFromLocalStorage) {
      return JSON.parse(easyOrderStateFromLocalStorage);
    }
    return defaultEasyOrderState;
  };

  // 페이지 로드시 localStorage에서 easyOrderState를 불러와서 초기화
  useEffect(() => {
    const easyOrderStateFromLocalStorage = getEasyOrderStateFromLocalStorage(currentUser);
    dispatchCartAction({
      type: 'INITIALIZE',
      easyOrderState: easyOrderStateFromLocalStorage,
    });
  }, [currentUser]);

  // easyOrderState가 업데이트 될때마다 localStorage에 저장
  useEffect(() => {
    if (currentUser) {
      saveEasyOrderStateToLocalStorage(easyOrderState, currentUser);
    }
  }, [easyOrderState, currentUser]);

  //
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
    const {
      total,
      totalQty,
      originalPrices,
      discountPrices,
      discountedPrices,
      finalPrice,
    } = easyOrderState.items.reduce(
      (acc, item) => {
        const qty = item.amount;
        const originalPrice = item.amount * item.price;
        const discountPrice =
          item.amount * item.price -
          item.amount * item.price * (1 - item.discountRate / 100);
        const discountedPrice = originalPrice - discountPrice;
        const discountedPrices = [...acc.discountedPrices, discountedPrice];
        const finalPrice = discountedPrices.reduce((acc, val) => {
          return (acc += val);
        }, 0);

        return {
          total: acc.total + discountedPrice,
          totalQty: acc.totalQty + qty,
          originalPrices: [...acc.originalPrices, originalPrice],
          discountPrices: [...acc.discountPrices, discountPrice],
          discountedPrices: [...acc.discountedPrices, discountedPrice],
          finalPrice,
        };
      },
      {
        total: 0,
        totalQty: 0,
        originalPrices: [],
        discountPrices: [],
        discountedPrices: [],
      }
    );

    // useEffect 사용을 위한 return 값
    return {
      total,
      totalQty,
      originalPrices,
      discountPrices,
      discountedPrices,
      finalPrice,
    };
  };

  useEffect(() => {
    const {
      total,
      totalQty,
      originalPrices,
      discountPrices,
      discountedPrices,
      finalPrice,
    } = calculateTotalPriceQty();
    setTotal({
      total,
      totalQty,
      originalPrices,
      discountPrices,
      discountedPrices,
      finalPrice,
    });
  }, [easyOrderState.items]);

  //

  const easyOrderContext = {
    title: defaultEasyOrderState.title,
    items: easyOrderState.items,
    totalAmount: easyOrderState.totalAmount,
    total: {
      total: total.total,
      totalQty: total.totalQty,
      originalPrices: total.originalPrices,
      discountPrices: total.discountPrices,
      discountedPrices: total.discountedPrices,
      finalPrice: total.finalPrice,
    },
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
    removeCheckedItem: removeCheckedItemFromCartHandler,
    clearCart: clearCartHandler,
  };

  return (
    <EasyOrderContext.Provider value={easyOrderContext}>
      {children}
    </EasyOrderContext.Provider>
  );
}

export default EasyOrderContextProvider;
