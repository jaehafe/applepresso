import React from 'react';
import * as S from './CartButton.style';
import { useNavigate } from 'react-router-dom';

function CartIn() {
  const navigate = useNavigate();

  const handleNavigateToCart = () => {
    navigate('/cart');
  };

  return (
    <S.Container onClick={handleNavigateToCart}>
      <S.CartButton>
        <S.StyledBsCart2 />
        <S.CartInQtyWrapper>
          <S.CartInQty>1</S.CartInQty>
        </S.CartInQtyWrapper>
      </S.CartButton>
    </S.Container>
  );
}

export default CartIn;
