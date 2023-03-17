import React from 'react';
import * as S from './EmptyCart.style';
import emptyCart from '../../assets/emptyCart.json';
import LottieAni from '../../utils/lottieAni';
import { Link } from 'react-router-dom';

function EmptyCart() {
  return (
    <S.Container>
      <S.Title>담긴 메뉴가 없네요.</S.Title>
      <S.HeroIMG>
        <LottieAni aniName={emptyCart} />
      </S.HeroIMG>
      <S.Button>
        <Link to="/main/order/recommend">메뉴 담으러 가기</Link>
      </S.Button>
    </S.Container>
  );
}

export default EmptyCart;
