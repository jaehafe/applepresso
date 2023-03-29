import React from 'react';
import * as S from './NoResult.style';
import LottieAni from '../../utils/LottieAni';
import no_results from '../../assets/no_results.json';

function NoResult() {
  return (
    <S.Container>
      <S.Title>해당기간 주문한 내역이 없습니다.</S.Title>
      <LottieAni aniName={no_results} />
    </S.Container>
  );
}

export default NoResult;
