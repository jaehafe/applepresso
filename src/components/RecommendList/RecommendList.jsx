import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './RecommendList.style';

function RecommendList(props) {
  const { id, title, price, thumbnail, isNew, isBest } = props;

  const navigate = useNavigate();
  const HandleNavigateToDetail = () => {
    navigate(`/menuDetail/${id}`);
  };
  return (
    <div>
      <S.IMGWrapper onClick={HandleNavigateToDetail}>
        {isNew && (
          <S.RecommendStatus $isNew={isNew} $isBest={isBest}>
            {isBest ? 'NEW & BEST' : 'NEW'}
          </S.RecommendStatus>
        )}
        {!isNew && isBest && (
          <S.RecommendStatus $isNew={isNew} $isBest={isBest}>
            BEST
          </S.RecommendStatus>
        )}
        <S.Thumbnail src={thumbnail} alt={title} />
      </S.IMGWrapper>
      <S.RecommendInfo>
        <S.InfoTitle>
          {title.length > 8 ? title.substring(0, 8).concat(' ...') : title}
        </S.InfoTitle>
        <S.InfoPrice>{price.toLocaleString()}원</S.InfoPrice>
      </S.RecommendInfo>
    </div>
  );
}

export default RecommendList;
