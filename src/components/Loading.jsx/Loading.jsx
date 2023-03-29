import React from 'react';
import * as S from './Loading.style';
import LottieAni from '../../utils/LottieAni';
import loading_ball from '../../assets/loading_ball.json';

function Loading() {
  return (
    <S.Container>
      <LottieAni aniName={loading_ball} />
    </S.Container>
  );
}

export default Loading;
