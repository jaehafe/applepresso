import React, { useContext } from 'react';
import Cart from '../../components/Cart/Cart';
import EmptyCart from '../../components/EmptyCart/EmptyCart';
import { CartContext } from '../../contexts/CartContextProvider';

function CartPage() {
  const cartCtx = useContext(CartContext);
  return <>{cartCtx.items.length ? <Cart cartCtx={cartCtx} /> : <EmptyCart />}</>;
}

export default CartPage;
