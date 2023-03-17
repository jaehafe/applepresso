import React, { useContext } from 'react';
import Cart from '../../components/Cart/Cart';
import * as S from './EasyOrder.style';
import { EasyOrderContext } from '../../contexts/EasyOrderContextProvider';
import EmptyCart from '../../components/EmptyCart/EmptyCart';

function EasyOrder() {
  const cartCtx = useContext(EasyOrderContext);
  return <>{cartCtx.items.length ? <Cart cartCtx={cartCtx} /> : <EmptyCart />}</>;
}

export default EasyOrder;
