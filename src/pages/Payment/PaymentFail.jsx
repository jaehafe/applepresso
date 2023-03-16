import React from 'react';
import * as S from './PaymentFail.style';

function PaymentFail() {
  return (
    <S.Container>
      결제 실패<Link to="/main/home">홈으로 돌아가기</Link>
    </S.Container>
  );
}

export default PaymentFail;
