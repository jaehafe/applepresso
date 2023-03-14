import React, { useContext } from 'react';
import ConfirmOrder from '../../components/ConfirmOrder/ConfirmOrder';
import { EasyOrderContext } from '../../contexts/EasyOrderContextProvider';

function EasyOrderConfirmPage() {
  const cartCtx = useContext(EasyOrderContext);
  return (
    <>
      <ConfirmOrder cartCtx={cartCtx} />
    </>
  );
}

export default EasyOrderConfirmPage;
