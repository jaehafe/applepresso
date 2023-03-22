import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SelectStoreNav from '../../components/SelectStoreNav/SelectStoreNav';
import * as S from './TodayMenu.style';
import banner from '../../assets/homeBanner/banner1.jpeg';
import useGetMenu from '../../hooks/useGetMenu';
import { formatPrice } from '../../utils/format';
import Loading from '../../components/Loading.jsx/Loading';

const getDayString = (day) => {
  const dayNames = ['일', '월', '화', '수', '목', '금', '토'];
  return dayNames[day];
};

const getFormattedDate = (date) => {
  return `${date.getMonth() + 1}월 ${date.getDate()}일`;
};

function TodayMenu() {
  const navigate = useNavigate();
  const [dates, setDates] = useState([]);
  const { data, loading, error, refetchData } = useGetMenu('/menu');

  const handleToBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    const newDates = [];
    for (let i = 0; i < 7; i++) {
      const currentDate = new Date();
      // setDate 월, 일을 나타내는 정수
      currentDate.setDate(currentDate.getDate() + i);
      newDates.push(currentDate);
    }
    setDates(newDates);
  }, []);

  const shuffleArray = (array) => {
    const newArray = array.slice();
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  const getRandomItems = (array, count) => {
    const shuffledArray = shuffleArray(array);
    return shuffledArray.slice(0, count);
  };

  const HandleNavigateToDetail = (id) => {
    navigate(`/menuDetail/${id}`);
  };

  // error boundary
  if (loading) {
    return <Loading />;
  }

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.HeaderWrapper>
          <S.HeaderTitleWrapper>
            <S.StyledBsArrowLeft onClick={handleToBack} />
            <S.HeaderTitle>오늘의 메뉴</S.HeaderTitle>
          </S.HeaderTitleWrapper>
        </S.HeaderWrapper>
        <SelectStoreNav top="80px" />
        <S.HeroAlertContainer>
          <S.HeroTitleWrapper>
            <S.HeroTitle>오늘의 메뉴</S.HeroTitle>
            <S.HeroWarningWrapper>
              <S.HeroWarning>배달 시 미적용</S.HeroWarning>
              <S.HeroWarning>일부매장 제외</S.HeroWarning>
            </S.HeroWarningWrapper>
          </S.HeroTitleWrapper>
          <S.HeroParagraphWrapper>
            <S.HeroParagraph>매일매일 달라지는 메뉴, 기분 좋은 가격!</S.HeroParagraph>
            <S.HeroParagraph>놓치지 마세요!</S.HeroParagraph>
          </S.HeroParagraphWrapper>
        </S.HeroAlertContainer>
      </S.HeaderContainer>
      <S.Main>
        {error && (
          <S.ButtonContainer>
            <S.TitleWrapper>
              <S.RetryTitle>요청사항을 처리하는데 실패했습니다.</S.RetryTitle>
              <S.RetrySubtitle>잠시 후 다시 시도해주세요</S.RetrySubtitle>
            </S.TitleWrapper>
            <S.RetryButton
              onClick={() => {
                refetchData();
              }}
            >
              다시 시도하기
            </S.RetryButton>
          </S.ButtonContainer>
        )}
        {getRandomItems(data, 7).map((item, index) => {
          const { id, thumbnail, title, ENTitle, discountRate, price } = item;
          const discountPrice = price - price * (1 - discountRate / 100);
          const discountedPrice = price - discountPrice;
          const date = dates[index];
          return (
            <S.MainRow key={id}>
              <S.MainRowAside>
                <S.Date>{date && getFormattedDate(date)}</S.Date>
                <S.DayOfWeek>{date && getDayString(date.getDay())}</S.DayOfWeek>
              </S.MainRowAside>
              <S.MainBorder>
                <S.StyledAiOutlineRightCircle />
              </S.MainBorder>
              <S.MainRowHero onClick={() => HandleNavigateToDetail(id)}>
                <S.MenuWrapper>
                  <S.Thumbnail src={thumbnail} alt={title} />
                  <S.MenuInfo>
                    <S.MenuTitle>{title}</S.MenuTitle>
                    <S.MenuEngTitle>{ENTitle}</S.MenuEngTitle>
                    <S.MenuPriceWrapper>
                      <S.OriginalPrice>{formatPrice(price)}원</S.OriginalPrice>
                      <S.DiscountedPrice>
                        {formatPrice(discountedPrice)}원
                      </S.DiscountedPrice>
                    </S.MenuPriceWrapper>
                  </S.MenuInfo>
                </S.MenuWrapper>
              </S.MainRowHero>
            </S.MainRow>
          );
        })}
      </S.Main>
    </S.Container>
  );
}

export default TodayMenu;
