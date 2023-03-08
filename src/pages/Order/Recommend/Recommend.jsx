import React from 'react';
import * as S from './Recommend.style';
import { menus } from '../../../constants/data/coffee';

import { Pagination, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';

function Recommend() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.RecommendTitle>다양한 커피 메뉴</S.RecommendTitle>
        <S.RecommendLists
          modules={[A11y]}
          spaceBetween={10}
          slidesPerView={3.5}
          pagination={{
            clickable: true,
            // bulletClass: CustomBullet,
          }}
        >
          {menus.map((menu) => {
            const { id, title, price, thumbnail, isNew, isBest } = menu;
            return (
              <S.RecommendList key={id}>
                <S.IMGWrapper>
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
              </S.RecommendList>
            );
          })}
        </S.RecommendLists>
      </S.Wrapper>
    </S.Container>
  );
}

export default Recommend;

{
  /* {isNew && (
                <S.RecommendStatus $isNew={isNew} $isBest={isBest}>
                  {isBest ? 'NEW & BEST' : 'NEW'}
                </S.RecommendStatus>
              )}
              {!isNew && isBest && (
                <S.RecommendStatus $isNew={isNew} $isBest={isBest}>
                  BEST
                </S.RecommendStatus>
              )} */
}
