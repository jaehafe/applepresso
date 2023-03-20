import React, { useContext } from 'react';
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
import { Link, useNavigate } from 'react-router-dom';
import { EasyOrderContext } from '../../contexts/EasyOrderContextProvider';

const bannerItem = [
  { img: banner1, name: banner1 },
  { img: banner2, name: banner2 },
  { img: banner3, name: banner3 },
  { img: banner4, name: banner4 },
];

const HeroInfo = [
  { id: 'stamp', count: 0, name: '스탬프' },
  { id: 'coupon', count: 1, name: '쿠폰' },
  { id: 'point', count: 0, name: '포인트' },
];

function Home() {
  const easyOrderCtx = useContext(EasyOrderContext);
  const navigate = useNavigate();
  const handleAddOrder = () => {
    navigate('/main/order/recommend');
  };

  const navigateToEasyOrder = () => {
    navigate('/easyOrder');
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
              <SwiperSlide key={item.name}>
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
          {easyOrderCtx.items.length ? (
            <S.AddEasyOrderLists>
              <S.AddEasyOrderListsSwiper
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={1.7}
              >
                {easyOrderCtx.items.map((item) => {
                  const { thumbnail, title, id } = item;
                  return (
                    <S.AddEasyOrderListSwiperSlide key={id} onClick={navigateToEasyOrder}>
                      <S.EasyOrderIMGWrapper>
                        <S.EasyOrderIMG src={thumbnail} alt={title} />
                      </S.EasyOrderIMGWrapper>
                      <S.EasyOrderMenuTitle>{title}</S.EasyOrderMenuTitle>
                    </S.AddEasyOrderListSwiperSlide>
                  );
                })}
              </S.AddEasyOrderListsSwiper>
            </S.AddEasyOrderLists>
          ) : (
            <S.AddEasyOrderButton>
              <S.AddEasyOrderList onClick={handleAddOrder}>
                <S.StyledFaRegHandPointer />
                <S.AddEasyOrderDesc>나만의 간편 주문을 추가해보세요.</S.AddEasyOrderDesc>
              </S.AddEasyOrderList>
              <S.AddEasyOrderExtraListButton onClick={handleAddOrder}>
                +
              </S.AddEasyOrderExtraListButton>
            </S.AddEasyOrderButton>
          )}
          {/* + 버튼 */}
        </S.AddEasyOrderWrapper>
      </S.EasyOrderContainer>
    </S.Container>
  );
}

export default Home;
