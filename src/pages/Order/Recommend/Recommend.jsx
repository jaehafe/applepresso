import React from 'react';
import * as S from './Recommend.style';
import { A11y } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/pagination';
import 'swiper/css';
import RecommendList from '../../../components/RecommendList/RecommendList';
import { menuDatas } from '../../../constants/data/menuDatas';

const coffeeMenu = menuDatas.filter((menu) => menu.tags.includes('coffee'));
const bestMenu = menuDatas.filter((menu) => menu.isBest === true);
const newMenu = menuDatas.filter((menu) => menu.isNew === true);

function Recommend() {
  return (
    <S.Container>
      <S.Wrapper>
        <S.RecommendTitle>다양한 커피 메뉴</S.RecommendTitle>
        <S.RecommendLists
          modules={[A11y]}
          spaceBetween={30}
          slidesPerView={3.5}
          pagination={{
            clickable: true,
            // bulletClass: CustomBullet,
          }}
        >
          {coffeeMenu.map((menu) => (
            <S.RecommendList key={menu.id}>
              <RecommendList key={menu.id} {...menu} />
            </S.RecommendList>
          ))}
        </S.RecommendLists>
      </S.Wrapper>
      <S.Wrapper>
        <S.RecommendTitle>BEST 메뉴</S.RecommendTitle>
        <S.RecommendLists
          modules={[A11y]}
          spaceBetween={10}
          slidesPerView={3.5}
          pagination={{
            clickable: true,
            // bulletClass: CustomBullet,
          }}
        >
          {bestMenu.map((menu) => (
            <S.RecommendList key={menu.id}>
              <RecommendList key={menu.id} {...menu} />
            </S.RecommendList>
          ))}
        </S.RecommendLists>
      </S.Wrapper>
      {/*  */}
      <S.Wrapper>
        <S.RecommendTitle>새로운 메뉴</S.RecommendTitle>
        <S.RecommendLists
          modules={[A11y]}
          spaceBetween={10}
          slidesPerView={3.5}
          pagination={{
            clickable: true,
            // bulletClass: CustomBullet,
          }}
        >
          {newMenu.map((menu) => (
            <S.RecommendList key={menu.id}>
              <RecommendList key={menu.id} {...menu} />
            </S.RecommendList>
          ))}
        </S.RecommendLists>
      </S.Wrapper>
    </S.Container>
  );
}

export default Recommend;
