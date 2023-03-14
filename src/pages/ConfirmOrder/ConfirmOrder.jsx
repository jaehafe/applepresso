import React, { useContext, useEffect, useState } from 'react';
import * as S from './ConfirmOrder.style';
import { useNavigate } from 'react-router-dom';
import { formatPrice } from '../../utils/format';
import { CartContext } from '../../contexts/CartContextProvider';
import usePostMenu from '../../hooks/usePostMenu';
import { LoginContext } from '../../contexts/LoginContextProvider';
const orderDate = new Date().toISOString();
function ConfirmOrder() {
  const { postMenu, error, success } = usePostMenu('/pay');
  const cartCtx = useContext(CartContext);
  const { currentUser } = useContext(LoginContext);

  const navigate = useNavigate();
  const handleToBack = () => {
    navigate(-1);
  };

  const originalPrice = cartCtx.total.originalPrices.reduce((acc, val) => {
    return (acc += val);
  }, 0);

  const discountPrice = cartCtx.total.discountPrices.reduce((acc, val) => {
    return (acc += val);
  }, 0);

  const handlePayment = () => {
    postMenu({
      user: currentUser?.user,
      orderDetail: cartCtx.items,
      orderDate,
    });

    const confirmPayment = window.confirm('주문 완료!');
    if (confirmPayment) {
      cartCtx.clearCart();
      navigate('/main/home');
    }
  };

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.HeaderWrapper>
          <S.HeaderTitleWrapper>
            <S.StyledBsArrowLeft onClick={handleToBack} />
            <S.HeaderTitle>주문 확인</S.HeaderTitle>
          </S.HeaderTitleWrapper>
        </S.HeaderWrapper>
      </S.HeaderContainer>
      <S.BodyPaddingTop>
        {/* 주의사항 */}
        <S.TipsWrapper>
          <S.StyledBsExclamationCircle />
          <S.Tips>
            스탬프 적립 제외: 제조음료 외의 제품(병음료, 베이커리&디저트 류, MD상품 등).
            할인 적용 메뉴(오늘의 메뉴 등). 쿠폰사용 구매 건.
          </S.Tips>
        </S.TipsWrapper>
        {/* 주문매장 */}
        <S.SelectShopWrapper>
          <S.SelectShopTitleWrapper>
            <S.SelectShopTitle>주문 매장</S.SelectShopTitle>
            <S.StyledIoIosArrowForward />
          </S.SelectShopTitleWrapper>
          <S.SelectedShopWrapper>
            <S.SelectedShopTitle>회기역사거리점</S.SelectedShopTitle>
            <S.SelectedShopInfos>
              <S.ShopInfo>배달 가능점</S.ShopInfo>
              <S.ShopInfo>직영점</S.ShopInfo>
            </S.SelectedShopInfos>
          </S.SelectedShopWrapper>
          <S.SelectedShopAddress>서울특별시 동대문구 회기로 176</S.SelectedShopAddress>
        </S.SelectShopWrapper>
        {/* 테이크 아웃 장소 선택 */}
        <S.SelectTakeoutOptionWrapper>
          <S.SelectTakeoutOptionTitle>장소 선택</S.SelectTakeoutOptionTitle>
          <S.TakeoutOptionsWrapper>
            <S.TakeOutOptions>
              <S.TakeOutOptionsTitle>테이크아웃</S.TakeOutOptionsTitle>
              <S.TakeOutOptionsSubTitle>(일회용 컵)</S.TakeOutOptionsSubTitle>
            </S.TakeOutOptions>
            <S.TakeOutOptions>
              <S.TakeOutOptionsTitle>매장</S.TakeOutOptionsTitle>
              <S.TakeOutOptionsSubTitle>(종이컵)</S.TakeOutOptionsSubTitle>
            </S.TakeOutOptions>
            <S.TakeOutOptions>
              <S.TakeOutOptionsTitle>매장 + 테이크아웃</S.TakeOutOptionsTitle>
              <S.TakeOutOptionsSubTitle>(종이컵)</S.TakeOutOptionsSubTitle>
            </S.TakeOutOptions>
            <S.TakeOutOptions>
              <S.TakeOutOptionsTitle>텀블러</S.TakeOutOptionsTitle>
              <S.TakeOutOptionsSubTitle>(음료 1잔만 주문 가능)</S.TakeOutOptionsSubTitle>
            </S.TakeOutOptions>
          </S.TakeoutOptionsWrapper>
          <S.TakeoutTip>
            <S.StyledBsExclamationCircle />
            <S.Tips>주문 후에는 컵 변경이 불가합니다.</S.Tips>
          </S.TakeoutTip>
          <S.TakeoutRequestMemo>
            제조 / 픽업 요청사항 <S.StyledIoIosArrowForward />
          </S.TakeoutRequestMemo>
        </S.SelectTakeoutOptionWrapper>
        {/* 포잔 선택 */}
        <S.SelectTakeoutOptionWrapper>
          <S.SelectTakeoutOptionTitle>포장 선택</S.SelectTakeoutOptionTitle>
          <S.TakeoutOptionsWrapper>
            <S.TakeOutOptions>
              <S.TakeOutOptionsTitle>포장 안함</S.TakeOutOptionsTitle>
              <S.TakeOutOptionsSubTitle>(일회용 컵)</S.TakeOutOptionsSubTitle>
            </S.TakeOutOptions>
            <S.TakeOutOptions>
              <S.TakeOutOptionsTitle>전체 포장</S.TakeOutOptionsTitle>
              <S.TakeOutOptionsSubTitle>(캐리어)</S.TakeOutOptionsSubTitle>
            </S.TakeOutOptions>
          </S.TakeoutOptionsWrapper>
        </S.SelectTakeoutOptionWrapper>
        {/* 쿠폰 */}
        <S.SelectCouponWrapper>
          <S.SelectCouponHeaderWrapper>
            <S.SelectCouponTitleWrapper>
              <S.SelectCouponTitle>쿠폰</S.SelectCouponTitle>
              <S.StyledBsExclamationCircle />
            </S.SelectCouponTitleWrapper>
            <S.StyledIoIosArrowForward />
          </S.SelectCouponHeaderWrapper>
          {/*  */}
          <S.CouponApplyCheckBoxWrapper>
            <S.CouponApplyCheckBox type="checkbox" />
            <S.CouponApplyTitle>자동 적용</S.CouponApplyTitle>
          </S.CouponApplyCheckBoxWrapper>
          <S.CouponApplyListWrapper>
            <S.CouponApplyListTitle>쿠폰 1장</S.CouponApplyListTitle>
            <S.CouponApplyListPrice>-1,500원</S.CouponApplyListPrice>
          </S.CouponApplyListWrapper>
        </S.SelectCouponWrapper>
        {/* 포인트 */}
        <S.SelectPointWrapper>
          <S.SelectPointHeaderWrapper>
            <S.SelectPointTitleWrapper>포인트</S.SelectPointTitleWrapper>
            <S.StyledIoIosArrowDown />
          </S.SelectPointHeaderWrapper>
          <S.PointApplyCheckBoxWrapper>
            <S.PointApplyCheckBox type="checkbox" />
            <S.PointApplyTitle>포인트 결제 불가 (사용 가능 0P)</S.PointApplyTitle>
          </S.PointApplyCheckBoxWrapper>
        </S.SelectPointWrapper>
        {/* 픽업 예정시간 */}
        <S.SelectPickupTimeWrapper>
          <S.SelectPickupTimeHeaderWrapper>
            <S.SelectPointTitleWrapper>픽업 예정시간</S.SelectPointTitleWrapper>
            <S.StyledIoIosArrowDown />
          </S.SelectPickupTimeHeaderWrapper>
          <S.SelectPickupTime>바로 찾으러 갈게요!</S.SelectPickupTime>
          <S.SelectPickupTimeRange type="range" />
          <S.SelectPickupTimeTip>
            도착 시간에 맞춰 음료를 제조해 드립니다.
          </S.SelectPickupTimeTip>
        </S.SelectPickupTimeWrapper>
        {/* 결제 정보 (카드 추가 페이지 만들어야 함, 카카오 페이도 대응)*/}
        <S.SelectPaymentWrapper>
          <S.SelectPaymentHeaderWrapper>
            <S.SelectPaymentTitleWrapper>결제 정보</S.SelectPaymentTitleWrapper>
            <S.StyledIoIosArrowForward />
          </S.SelectPaymentHeaderWrapper>
          <S.SelectPaymentInfo>신한 (4364-2007-****-7483)</S.SelectPaymentInfo>
        </S.SelectPaymentWrapper>
        {/* 주문메뉴 */}
        <S.OrderDetailWrapper>
          <S.OrderDetailHeaderWrapper>
            <S.OrderDetailTitleWrapper>
              주문 내역 {cartCtx.total.totalQty}개
            </S.OrderDetailTitleWrapper>
          </S.OrderDetailHeaderWrapper>
          {/* 주문 메뉴들 */}
          <S.MenusContainer>
            {cartCtx.items.map((item) => {
              const { id, thumbnail, title, price, discountRate, amount } = item;
              const discountPrice =
                amount * price - amount * price * (1 - discountRate / 100);
              const finalPrice = amount * price - discountPrice;
              return (
                <S.MenuDetail key={id}>
                  <S.ThumbnailWrapper>
                    <S.Thumbnail src={thumbnail} alt={title} />
                  </S.ThumbnailWrapper>
                  <S.OrderInfo>
                    <S.TitleWrapper>
                      <S.Title>
                        {title} <S.Amount>{amount}개</S.Amount>
                      </S.Title>
                      <S.Price>{finalPrice.toLocaleString()}원</S.Price>
                    </S.TitleWrapper>

                    {discountRate && (
                      <S.Options>
                        <S.Option>이벤트 할인</S.Option>
                        <S.OptionPrice>-{discountPrice.toLocaleString()}원</S.OptionPrice>
                      </S.Options>
                    )}

                    {/* <S.TotalWrapper>
                    <S.TotalTitle>합계</S.TotalTitle>
                    <S.TotalPrice>5,000원</S.TotalPrice>
                  </S.TotalWrapper> */}
                  </S.OrderInfo>
                </S.MenuDetail>
              );
            })}
          </S.MenusContainer>
          {/*  */}
        </S.OrderDetailWrapper>
        <S.OrderCalcWrapper>
          <S.TotalOrderPriceWrapper>
            <S.TotalOrderPriceTitle>총 주문 금액</S.TotalOrderPriceTitle>
            <S.TotalOrderPrice>{formatPrice(originalPrice)}원</S.TotalOrderPrice>
            <S.TotalOrderPriceTitle>할인금액</S.TotalOrderPriceTitle>
            <S.TotalOrderPrice>-{formatPrice(discountPrice)}원</S.TotalOrderPrice>
          </S.TotalOrderPriceWrapper>
        </S.OrderCalcWrapper>
        {/*  */}
        <S.PaymentCalcWrapper>
          <S.PaymentPriceWrapper>
            <S.PaymentPriceTitle>결제 금액</S.PaymentPriceTitle>
            <S.PaymentPrice>{cartCtx.total.finalPrice.toLocaleString()}원</S.PaymentPrice>
          </S.PaymentPriceWrapper>
        </S.PaymentCalcWrapper>
        {/*  */}
        <S.PaymentButtonContainer>
          <S.PaymentButtonWrapper onClick={handlePayment}>
            주문 결제하기
          </S.PaymentButtonWrapper>
        </S.PaymentButtonContainer>
        {/*  */}
      </S.BodyPaddingTop>
    </S.Container>
  );
}
export default ConfirmOrder;
