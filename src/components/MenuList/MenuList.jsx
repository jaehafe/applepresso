import React from 'react';
import Menu from '../Menu/Menu';
import * as S from './MenuList.style';
import { useNavigate, useParams } from 'react-router-dom';
import Loading from '../Loading.jsx/Loading';

function MenuList(props) {
  console.log(props);

  if (props.loading) {
    return <Loading />;
  }

  if (props.error) {
    return (
      <S.ButtonContainer>
        <S.TitleWrapper>
          <S.RetryTitle>요청사항을 처리하는데 실패했습니다.</S.RetryTitle>
          <S.RetrySubtitle>잠시 후 다시 시도해주세요</S.RetrySubtitle>
        </S.TitleWrapper>
        <S.RetryButton
          onClick={() => {
            props.refetchData();
          }}
        >
          다시 시도하기
        </S.RetryButton>
      </S.ButtonContainer>
    );
  }

  return (
    <S.Container>
      <S.MenuLists>
        {props.menus.map((menu) => (
          <Menu key={menu.id} {...menu} value={menu.id} />
        ))}
      </S.MenuLists>
    </S.Container>
  );
}

export default MenuList;
