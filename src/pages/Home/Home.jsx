import React from 'react';
import * as S from './Home.style';
import { Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import 'swiper/css/autoplay';
import banner1 from '../../assets/homeBanner/banner1.jpeg';
import banner2 from '../../assets/homeBanner/banner2.png';
import banner3 from '../../assets/homeBanner/banner3.jpeg';
import banner4 from '../../assets/homeBanner/banner4.jpeg';
import { useNavigate } from 'react-router-dom';

const bannerItem = [
  {
    id: 1,
    img: banner1,
    name: banner1,
  },
  {
    id: 2,
    img: banner2,
    name: banner2,
  },
  {
    id: 3,
    img: banner3,
    name: banner3,
  },
  {
    id: 4,
    img: banner4,
    name: banner4,
  },
];

const HeroInfo = [
  {
    id: 'stamp',
    count: 0,
    name: '스탬프',
  },
  {
    id: 'coupon',
    count: 1,
    name: '쿠폰',
  },
  {
    id: 'point',
    count: 0,
    name: '포인트',
  },
];

function Home() {
  const navigate = useNavigate();
  const handleAddOrder = () => {
    navigate('/order');
  };

  return (
    <S.Container>
      <S.BannerWrapper>
        <S.HomeSwiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1.5}
          autoplay={{ delay: 3000 }}
          pagination={{
            clickable: true,
            // bulletClass: CustomBullet,
          }}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          {bannerItem.map((item) => {
            return (
              <SwiperSlide key={item.id}>
                <S.BannerIMG src={item.img} alt={item.name} />
              </SwiperSlide>
            );
          })}
        </S.HomeSwiper>
      </S.BannerWrapper>
      <S.RecommendNav>
        <S.TodayMenu>
          <S.StyledFiCoffee />
          <S.TodayMenuTitle>오늘의 메뉴</S.TodayMenuTitle>
        </S.TodayMenu>
        <S.UserStatsWrapper>
          {HeroInfo.map((info) => {
            return (
              <S.UserStats key={info.id}>
                <S.InfoCount>{info.count}</S.InfoCount>
                <S.InfoName>{info.name}</S.InfoName>
              </S.UserStats>
            );
          })}
        </S.UserStatsWrapper>
      </S.RecommendNav>
      <S.EasyOrderContainer>
        <S.EasyOrderTitle>간편 주문</S.EasyOrderTitle>
        <S.AddEasyOrderWrapper>
          <S.AddEasyOrderLists>
            <S.AddEasyOrderList onClick={handleAddOrder}>
              <S.StyledFaRegHandPointer />
              <S.AddEasyOrderDesc>나만의 간편 주문을 추가해보세요.</S.AddEasyOrderDesc>
            </S.AddEasyOrderList>
            <S.AddEasyOrderExtraListButton onClick={handleAddOrder}>
              +
            </S.AddEasyOrderExtraListButton>
          </S.AddEasyOrderLists>
        </S.AddEasyOrderWrapper>
      </S.EasyOrderContainer>
    </S.Container>
  );
}

export default Home;
