import React, { useContext } from 'react';
import Cart from '../../components/Cart/Cart';
import { CartContext } from '../../contexts/CartContextProvider';

function CartPage() {
  const cartCtx = useContext(CartContext);
  return (
    <>
      <Cart cartCtx={cartCtx} />
    </>
  );
}

export default CartPage;
