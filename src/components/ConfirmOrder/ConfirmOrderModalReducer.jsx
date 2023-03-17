import React, { useReducer } from 'react';

const initialState = {
  openOrderConfirmModal: false,
  orderConfirmApprove: false,
  orderConfirmCancel: false,
};

const orderModalReducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_MODAL':
      return { ...state, openOrderConfirmModal: true };

    case 'CLOSE_MODAL':
      return { ...state, orderConfirmCancel: true };

    case 'APPROVE_ORDER':
      return { ...state, orderConfirmApprove: true, orderConfirmCancel: false };

    case 'CANCEL_ORDER':
      return { ...state, orderConfirmApprove: false, orderConfirmCancel: true };

    default:
      throw new Error(`유효하지 않은 action type: ${action.type} 입니다.`);
  }
};

function ConfirmOrderModalReducer() {
  const [state, dispatch] = useReducer(orderModalReducer, initialState);

  const openConfirmOrderModal = () => {
    dispatch({ type: 'OPEN_MODAL' });
  };
  const closeConfirmOrderModal = () => {
    dispatch({ type: 'CLOSE_MODAL' });
  };
  const handleOrderApprove = () => {
    dispatch({ type: 'APPROVE_ORDER' });
  };
  const handleOrderCancel = () => {
    dispatch({ type: 'CANCEL_ORDER' });
  };

  return {
    openConfirmOrderModal,
    closeConfirmOrderModal,
    handleOrderApprove,
    handleOrderCancel,
  };
}

export default ConfirmOrderModalReducer;
