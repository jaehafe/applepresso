import React from 'react';
import * as S from './Recommend.style';
import { menus } from '../../../constants/data/coffee';
import { setMenu } from '../../../constants/data/setMenu';
import { milkTeaLatte } from '../../../constants/data/milkTeaLatte';
import { A11y } from 'swiper';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/css/pagination';
import 'swiper/css';
import RecommendList from '../../../components/RecommendList/RecommendList';

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
          {menus.map((menu) => (
            <S.RecommendList key={menu.id}>
              <RecommendList key={menu.id} {...menu} />
            </S.RecommendList>
          ))}
        </S.RecommendLists>
      </S.Wrapper>
      <S.Wrapper>
        <S.RecommendTitle>세트 메뉴</S.RecommendTitle>
        <S.RecommendLists
          modules={[A11y]}
          spaceBetween={10}
          slidesPerView={3.5}
          pagination={{
            clickable: true,
            // bulletClass: CustomBullet,
          }}
        >
          {setMenu.map((menu) => (
            <S.RecommendList key={menu.id}>
              <RecommendList key={menu.id} {...menu} />
            </S.RecommendList>
          ))}
        </S.RecommendLists>
      </S.Wrapper>
      {/*  */}
      <S.Wrapper>
        <S.RecommendTitle>밀크 티 & 라떼</S.RecommendTitle>
        <S.RecommendLists
          modules={[A11y]}
          spaceBetween={10}
          slidesPerView={3.5}
          pagination={{
            clickable: true,
            // bulletClass: CustomBullet,
          }}
        >
          {milkTeaLatte.map((menu) => (
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
