import React, { useContext, useEffect, useState } from 'react';
import * as S from './CartButton.style';
import { useNavigate } from 'react-router-dom';
import CartContext from '../../store/CartContext';

function CartIn() {
  const cartCtx = useContext(CartContext);
  const navigate = useNavigate();
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const handleNavigateToCart = () => {
    navigate('/cart');
  };

  useEffect(() => {
    if (cartCtx.total.totalQty === 0) return;
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.total.totalQty]);

  return (
    <S.Container btnIsHighlighted={btnIsHighlighted} onClick={handleNavigateToCart}>
      <S.CartButton>
        <S.StyledBsCart2 />
        <S.CartInQtyWrapper>
          <S.CartInQty>{cartCtx.total.totalQty}</S.CartInQty>
        </S.CartInQtyWrapper>
      </S.CartButton>
    </S.Container>
  );
}

export default CartIn;
