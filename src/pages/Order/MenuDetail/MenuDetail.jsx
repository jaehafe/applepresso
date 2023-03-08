import React from 'react';
import * as S from './MenuDetail.style';
import { useParams } from 'react-router-dom';
import { setMenu } from '../../../constants/data/setMenu';

function MenuDetail() {
  console.log(setMenu);
  const { id } = useParams();
  console.log('id', id);
  const menuData = setMenu.find((menu) => menu.id === id);
  console.log('menuData', menuData);
  return (
    <div>
      <S.Container>
        <S.HeaderWrapper>
          <S.HeaderTitle>{menuData.title}</S.HeaderTitle>
          <S.StyledFiSearch />
        </S.HeaderWrapper>
      </S.Container>
    </div>
  );
}

export default MenuDetail;
