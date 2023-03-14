import React, { useContext } from 'react';
import ConfirmOrder from '../../components/ConfirmOrder/ConfirmOrder';
import { CartContext } from '../../contexts/CartContextProvider';

function ConfirmOrderPage() {
  const cartCtx = useContext(CartContext);
  return (
    <div>
      <ConfirmOrder cartCtx={cartCtx} />
    </div>
  );
}

export default ConfirmOrderPage;
