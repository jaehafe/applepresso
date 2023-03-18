import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import * as S from './DetailOrderHistory.style';
import useGetOrderedMenu from '../../hooks/useGetOrderedMenu';
import { formatDate, formatPrice } from '../../utils/format';
import Loading from '../../components/Loading.jsx/Loading';

function DetailOrderHistory() {
  const { data, loading, error } = useGetOrderedMenu('/pay');
  const [detailOrderHistory, setDetailOrderHistory] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();
  const handleToBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    if (data.length > 0) {
      setDetailOrderHistory(data?.find((menu) => menu.id === id));
    }
  }, [data, id]);

  if (!detailOrderHistory) {
    return <Loading />;
  }

  const { orderDate, orderDetail, orderRequest } = detailOrderHistory?.value;

  const { makingRequestInput, pickupTimeRange } = orderRequest;
  const { option: selectedPlaceOption } = orderRequest.selectedPlace;
  const { option: selectedTakeoutOption } = orderRequest.selectedTakeoutOption;

  const orderedPriceArr = orderDetail.map((item) => {
    return item.price * item.amount;
  });
  const discountPriceArr = orderDetail.map((item) => {
    return (
      item.amount * item.price - item.amount * item.price * (1 - item.discountRate / 100)
    );
  });
  const totalPrice = orderedPriceArr.reduce((acc, val) => {
    return (acc += val);
  }, 0);
  const totalDiscountPrice = discountPriceArr.reduce((acc, val) => {
    return (acc += val);
  });

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.HeaderWrapper>
          <S.HeaderTitleWrapper>
            <S.StyledBsArrowLeft onClick={handleToBack} />
            <S.HeaderTitle>주문 상세</S.HeaderTitle>
          </S.HeaderTitleWrapper>
        </S.HeaderWrapper>
      </S.HeaderContainer>
      <S.Body>
        <S.BodyContainer>
          <S.OrderInfoContainer>
            <S.OrderInfoWrapper>
              <S.OrderInfoTitle>주문번호</S.OrderInfoTitle>
              <S.OrderInfoNumber>{detailOrderHistory.id}</S.OrderInfoNumber>
            </S.OrderInfoWrapper>
            <S.OrderInfoOrderedDate>{formatDate(orderDate)}</S.OrderInfoOrderedDate>
          </S.OrderInfoContainer>
        </S.BodyContainer>
        <S.BodyContainer>
          <S.OrderedShop>
            <S.OrderShopTitle>주문 매장</S.OrderShopTitle>
            <S.OrderedShopWrapper>
              <S.OrderedShopTitle>회기역 사거리점</S.OrderedShopTitle>
              <S.ShopInfo>직영점</S.ShopInfo>
            </S.OrderedShopWrapper>
            <S.OrderedShopAddress>서울특별시 동대문구 회기로 176</S.OrderedShopAddress>
          </S.OrderedShop>
        </S.BodyContainer>
        <S.BodyContainer>
          <S.OptionWrapper>
            <S.OptionTitle>요청사항</S.OptionTitle>
            <S.OptionInfosWrapper>
              <S.OptionInfos>
                <S.OptionInfoTitle>장소 선택</S.OptionInfoTitle>
                <S.OptionInfo>{selectedPlaceOption}</S.OptionInfo>
              </S.OptionInfos>
              <S.OptionInfos>
                <S.OptionInfoTitle>포장 선택</S.OptionInfoTitle>
                <S.OptionInfo>{selectedTakeoutOption}</S.OptionInfo>
              </S.OptionInfos>
              {makingRequestInput ? (
                <S.OptionInfos>
                  <S.OptionInfoTitle>제조 / 픽업 요청사항</S.OptionInfoTitle>
                  <S.OptionInfo>{makingRequestInput}</S.OptionInfo>
                </S.OptionInfos>
              ) : (
                ''
              )}
              <S.OptionInfos>
                <S.OptionInfoTitle>도착 예상시간</S.OptionInfoTitle>
                <S.OptionInfo>{pickupTimeRange}분 후 도착 에정</S.OptionInfo>
              </S.OptionInfos>
            </S.OptionInfosWrapper>
            {/*  */}
          </S.OptionWrapper>
        </S.BodyContainer>
        {/*  */}
        <S.BodyContainer>
          <S.OrderDetailHeaderWrapper>
            <S.OrderDetailTitleWrapper>주문 내역 3개</S.OrderDetailTitleWrapper>
          </S.OrderDetailHeaderWrapper>
          {/* 주문 메뉴들 */}
          <S.MenusContainer>
            {orderDetail.map((items) => {
              const { amount, discountRate, id, price, thumbnail, title } = items;
              const discountPrice =
                amount * price - amount * price * (1 - discountRate / 100);
              return (
                <S.MenuDetail key={id}>
                  <S.ThumbnailWrapper>
                    <S.Thumbnail src={thumbnail} alt={title} />
                  </S.ThumbnailWrapper>
                  <S.OrderInfo>
                    <S.MenuTitleWrapper>
                      <S.MenuTitle>
                        {title} <S.Amount>{amount}개</S.Amount>
                      </S.MenuTitle>
                      <S.Price>{formatPrice(price)}원</S.Price>
                    </S.MenuTitleWrapper>
                    <S.Options>
                      <S.Option>이벤트 할인</S.Option>
                      <S.OptionPrice>-{formatPrice(discountPrice)}원</S.OptionPrice>
                    </S.Options>
                  </S.OrderInfo>
                </S.MenuDetail>
              );
            })}
          </S.MenusContainer>
          {/*  */}
        </S.BodyContainer>
        <S.BodyContainer>
          <S.TotalOrderPriceWrapper>
            <S.TotalOrderPriceTitle>총 주문 금액</S.TotalOrderPriceTitle>
            <S.TotalOrderPrice>{formatPrice(totalPrice)}원</S.TotalOrderPrice>
            <S.TotalOrderPriceTitle>할인금액</S.TotalOrderPriceTitle>
            <S.TotalOrderPrice>-{formatPrice(totalDiscountPrice)}원</S.TotalOrderPrice>
          </S.TotalOrderPriceWrapper>
        </S.BodyContainer>

        {/*  */}
        <S.BodyContainer>
          <S.PaymentPriceWrapper>
            <S.PaymentPriceTitle>결제 금액</S.PaymentPriceTitle>
            <S.PaymentPrice>
              {formatPrice(totalPrice - totalDiscountPrice)}원
            </S.PaymentPrice>
          </S.PaymentPriceWrapper>
        </S.BodyContainer>
      </S.Body>
    </S.Container>
  );
}

export default DetailOrderHistory;
