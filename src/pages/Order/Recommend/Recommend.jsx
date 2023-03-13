import React from 'react';
import * as S from './Recommend.style';
import { A11y } from 'swiper';
import 'swiper/css';
import RecommendList from '../../../components/RecommendList/RecommendList';
import useGetMenu from '../../../hooks/useGetMenu';

function Recommend() {
  const { data, loading, error } = useGetMenu('/menu');

  const coffeeMenu = data.filter((menu) => menu.tags.includes('coffee'));
  const bestMenu = data.filter((menu) => menu.isBest === true);
  const newMenu = data.filter((menu) => menu.isNew === true);

  // if (loading) return <div>Loading...</div>;
  // if (error) return <div>Error: {error.message}</div>;
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
