import React from 'react';
import { Link } from 'react-router-dom';
import LottieAni from '../../utils/lottieAni';
import * as S from './PayRedirect.style';

function PayRedirect(props) {
  return (
    <S.Container>
      <S.Title>{props.title}</S.Title>
      <S.HeroIMG>
        <LottieAni aniName={props.aniName} />
      </S.HeroIMG>
      {props.message && (
        <S.Button>
          <Link to="/main/myPage">{props.message}</Link>
        </S.Button>
      )}
    </S.Container>
  );
}

export default PayRedirect;
