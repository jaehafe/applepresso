import React, { useContext } from 'react';
import Cart from '../../components/Cart/Cart';
import * as S from './EasyOrder.style';
import { EasyOrderContext } from '../../contexts/EasyOrderContextProvider';

function EasyOrder() {
  const cartCtx = useContext(EasyOrderContext);
  return (
    <>
      <Cart cartCtx={cartCtx} />
    </>
  );
}

export default EasyOrder;
