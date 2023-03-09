import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './Menu.style';

function Menus(props) {
  const {
    id,
    title,
    price,
    ENTitle,
    desc,
    thumbnail,
    isNew,
    isBest,
    onClick,
    ...menuProps
  } = props;

  const navigate = useNavigate();

  const HandleNavigateToDetail = () => {
    navigate(`/menuDetail/${id}`);
  };

  return (
    <S.Container onClick={HandleNavigateToDetail}>
      <S.Wrapper>
        <S.IMGWrapper>
          {isNew && (
            <S.MenuStatus $isNew={isNew} $isBest={isBest}>
              {isBest ? 'NEW & BEST' : 'NEW'}
            </S.MenuStatus>
          )}
          {!isNew && isBest && (
            <S.MenuStatus $isNew={isNew} $isBest={isBest}>
              BEST
            </S.MenuStatus>
          )}
          <S.Thumbnail src={thumbnail} alt={title} />
        </S.IMGWrapper>
        <S.MenuInfo>
          <S.MenuTitle>{title}</S.MenuTitle>
          <S.MenuENTitle>{ENTitle}</S.MenuENTitle>
          <S.MenuPrice>{price.toLocaleString()}원</S.MenuPrice>
        </S.MenuInfo>
      </S.Wrapper>
    </S.Container>
  );
}

export default Menus;
