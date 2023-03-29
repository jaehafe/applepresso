import React from 'react';
import * as S from './InitPage.style';
import LottieAni from '../../utils/LottieAni';
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/pagination';
import 'swiper/css';
import InitPageAni01 from '../../assets/InitPageAni01.json';
import InitPageAni02 from '../../assets/InitPageAni02.json';
import InitPageAni03 from '../../assets/InitPageAni03.json';
import { useNavigate } from 'react-router-dom';

function Hero({ num, title, desc, aniName }) {
  return (
    <>
      <S.HeroNum>{num}</S.HeroNum>
      <S.HeroTitle>{title}</S.HeroTitle>
      <S.HeroDesc>{desc}</S.HeroDesc>
      <S.HeroIMG>
        <LottieAni aniName={aniName} />
      </S.HeroIMG>
    </>
  );
}

function InitPage() {
  const navigate = useNavigate();
  const NavigateToSignUp = () => {
    navigate('/login');
  };

  return (
    <S.Container>
      <S.MainWrapper>
        <Swiper
          modules={[Pagination]}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
            // bulletClass: CustomBullet,
          }}
          // onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide>
            <Hero
              num="01"
              title="바나프레소 앱에서
              기다림 없이
              바로 주문하세요."
              desc="커피가 필요한 지금,
              때와 장소에 상관 없이 필요할 때 바로 주문"
              aniName={InitPageAni01}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Hero
              num="02"
              title="
              카운터 근처에
              있지 않아도 괜찮아요.
              "
              desc="커피를 기다리고 계신가요?
              카운터 근처에 있지 않아도 괜찮아요.
              메뉴가 나오면 알려드립니다."
              aniName={InitPageAni02}
            />
          </SwiperSlide>
          <SwiperSlide>
            <Hero
              num="03"
              title="
              바나프레소의
              새로운 소식과 혜택이
              모두 이곳에."
              desc="반갑고 새로운 소식과 혜택이
              모두 이곳에 모여있습니다."
              aniName={InitPageAni03}
            />
          </SwiperSlide>
        </Swiper>
      </S.MainWrapper>
      <S.Button onClick={NavigateToSignUp}>회원가입 / 로그인</S.Button>
    </S.Container>
  );
}

export default InitPage;
