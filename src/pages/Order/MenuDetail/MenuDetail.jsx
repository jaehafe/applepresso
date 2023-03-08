import React from 'react';
import * as S from './MenuDetail.style';
import { useParams } from 'react-router-dom';
import { menuDatas } from '../../../constants/data/menuDatas';

function MenuDetail() {
  const { id } = useParams();
  console.log('id', id);
  const menuData = menuDatas.find((menu) => menu.id === id);
  console.log('menuData', menuData);
  return (
    <>
      <S.HeaderContainer>
        <S.HeaderWrapper>
          <S.HeaderTitleWrapper>
            <S.StyledBsArrowLeft />
            <S.HeaderTitle>{menuData.title}</S.HeaderTitle>
          </S.HeaderTitleWrapper>
          <S.StyledAiOutlineUnorderedList />
        </S.HeaderWrapper>
      </S.HeaderContainer>
      <S.MenuContainer>123</S.MenuContainer>
    </>
  );
}

export default MenuDetail;
