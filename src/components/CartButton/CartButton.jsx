import React, { useContext, useEffect, useState } from 'react';
import * as S from './CartButton.style';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContextProvider';
import { EasyOrderContext } from '../../contexts/EasyOrderContextProvider';

function CartIn() {
  const cartCtx = useContext(CartContext);
  const easyOrderCtx = useContext(EasyOrderContext);
  const navigate = useNavigate();
  const [btnIsHighlighted, setBtnIsHighlighted] = useState(false);

  const handleNavigateToCart = () => {
    navigate('/cart');
  };
  const handleNavigateToEasyOrderCart = () => {
    navigate('/easyOrder');
  };

  useEffect(() => {
    if (cartCtx.total.totalQty === 0 || easyOrderCtx.total.totalQty) return;
    setBtnIsHighlighted(true);

    const timer = setTimeout(() => {
      setBtnIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [cartCtx.total.totalQty, easyOrderCtx.total.totalQty]);

  return (
    <S.Container btnIsHighlighted={btnIsHighlighted}>
      <S.CartButton onClick={handleNavigateToCart}>
        <S.StyledBsCart2 />
        <S.CartInQtyWrapper>
          <S.CartInQty>{cartCtx.total.totalQty}</S.CartInQty>
        </S.CartInQtyWrapper>
      </S.CartButton>
      <S.CartButton onClick={handleNavigateToEasyOrderCart}>
        <S.StyledBsBagHeart />
        <S.EasyOrderCartInQtyWrapper>
          <S.CartInQty>{easyOrderCtx.total.totalQty}</S.CartInQty>
        </S.EasyOrderCartInQtyWrapper>
      </S.CartButton>
    </S.Container>
  );
}

export default CartIn;
