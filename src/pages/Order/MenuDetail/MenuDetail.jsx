import React, { useContext, useRef, useState } from 'react';
import * as S from './MenuDetail.style';
import { useParams, useNavigate } from 'react-router-dom';
import { menuDatas } from '../../../constants/data/menuDatas';
import RecommendList from '../../../components/RecommendList/RecommendList';
import { A11y } from 'swiper';
import 'swiper/css';
import CartButton from '../../../components/CartButton/CartButton';
import CartContext from '../../../store/CartContext';

const coffeeMenu = menuDatas.filter((menu) => menu.tags.includes('coffee'));
const bestMenu = menuDatas.filter((menu) => menu.isBest === true);
const newMenu = menuDatas.filter((menu) => menu.isNew === true);

function MenuDetail() {
  const cartCtx = useContext(CartContext);
  const [menuCount, setMenuCount] = useState(1);

  console.log('cartCtx', cartCtx);
  console.log('cartCtx.items', cartCtx.items);

  const navigate = useNavigate();
  const { id } = useParams();

  const menuData = menuDatas.find((menu) => menu.id === id);

  const {
    title,
    ENTitle,
    desc,
    discountRate,
    isBest,
    isNew,
    isSoldOut,
    price,
    tags,
    thumbnail,
  } = menuData;

  const handleNavigateToCart = () => {
    navigate('/cart');
  };

  const handleNavigate = () => {
    navigate(-1);
  };

  const amountRef = useRef(null);
  console.log('amountRef', amountRef);

  const addToCartHandler = () => {
    cartCtx.addItem({
      id,
      title,
      amount: Number(amountRef.current.innerText),
      price,
      thumbnail,
    });
  };

  const handleMinusMenuCount = () => {
    if (menuCount > 1) {
      setMenuCount(menuCount - 1);
    }
  };

  const handlePlusMenuCount = () => {
    setMenuCount(menuCount + 1);
  };

  return (
    <>
      <CartButton onClick={handleNavigateToCart} />
      <S.HeaderContainer>
        <S.HeaderWrapper>
          <S.HeaderTitleWrapper>
            <S.StyledBsArrowLeft onClick={handleNavigate} />
            <S.HeaderTitle>{menuData.title}</S.HeaderTitle>
          </S.HeaderTitleWrapper>
          <S.StyledAiOutlineUnorderedList onClick={handleNavigate} />
        </S.HeaderWrapper>
      </S.HeaderContainer>
      <S.MenuContainer>
        <S.IMGWrapper>
          <S.MenuIMG src={thumbnail} />
        </S.IMGWrapper>
        <S.MenuInfo>
          <S.MenuTitle>{title}</S.MenuTitle>
          <S.ENTitle>{ENTitle}</S.ENTitle>
          <S.Desc>{desc}</S.Desc>
        </S.MenuInfo>
        <S.MenuDetailInfo>
          <S.Price>{price.toLocaleString()}원</S.Price>
          {/* <S.OptionWrapper>
            <S.Option>HOT</S.Option>
            <S.Option>ICE</S.Option>
          </S.OptionWrapper> */}
        </S.MenuDetailInfo>
      </S.MenuContainer>
      <S.Divider />
      <S.OrderOptionContainer>
        <S.MenuSelectWrapper>
          <S.CountSpan>수량</S.CountSpan>
          <S.CountControlWrapper>
            <S.CountMinus onClick={handleMinusMenuCount}>-</S.CountMinus>
            <S.CountQty ref={amountRef}>{menuCount}</S.CountQty>
            <S.CountPlus onClick={handlePlusMenuCount}>+</S.CountPlus>
          </S.CountControlWrapper>
        </S.MenuSelectWrapper>
        {/* <S.MenuSelectWrapper>
          <S.CountSpan>옵션</S.CountSpan>
        </S.MenuSelectWrapper> */}
      </S.OrderOptionContainer>
      <S.OrderButtons>
        <S.AddCartButton onClick={addToCartHandler}>담기</S.AddCartButton>
        <S.OrderNowButton>바로 주문하기</S.OrderNowButton>
      </S.OrderButtons>
      {/* 추천메뉴 */}
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
          <S.RecommendTitle>BSET 메뉴</S.RecommendTitle>
          <S.RecommendLists
            modules={[A11y]}
            spaceBetween={30}
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
        <S.Wrapper>
          <S.RecommendTitle>새로운 메뉴</S.RecommendTitle>
          <S.RecommendLists
            modules={[A11y]}
            spaceBetween={30}
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
    </>
  );
}

export default MenuDetail;
