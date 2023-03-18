import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './DetailOrderHistory.style';

function DetailOrderHistory() {
  const navigate = useNavigate();
  const handleToBack = () => {
    navigate(-1);
  };
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
              <S.OrderInfoNumber>2064-1</S.OrderInfoNumber>
            </S.OrderInfoWrapper>
            <S.OrderInfoOrderedDate>2023.03.17 13:08</S.OrderInfoOrderedDate>
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
                <S.OptionInfo>텀블러</S.OptionInfo>
              </S.OptionInfos>
              <S.OptionInfos>
                <S.OptionInfoTitle>포장 선택</S.OptionInfoTitle>
                <S.OptionInfo>전체포장</S.OptionInfo>
              </S.OptionInfos>
              <S.OptionInfos>
                <S.OptionInfoTitle>제조 / 픽업 요청사항</S.OptionInfoTitle>
                <S.OptionInfo>빨리 만들어주세요</S.OptionInfo>
              </S.OptionInfos>
              <S.OptionInfos>
                <S.OptionInfoTitle>도착 예상시간</S.OptionInfoTitle>
                <S.OptionInfo>8분 후 도착 에정</S.OptionInfo>
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
            <S.MenuDetail>
              <S.ThumbnailWrapper>
                <S.Thumbnail />
              </S.ThumbnailWrapper>
              <S.OrderInfo>
                <S.MenuTitleWrapper>
                  <S.MenuTitle>
                    123 <S.Amount>3개</S.Amount>
                  </S.MenuTitle>
                  <S.Price>2,800원</S.Price>
                </S.MenuTitleWrapper>

                <S.Options>
                  <S.Option>이벤트 할인</S.Option>
                  <S.OptionPrice>-2,800원</S.OptionPrice>
                </S.Options>
              </S.OrderInfo>
            </S.MenuDetail>
          </S.MenusContainer>
          {/*  */}
        </S.BodyContainer>
        <S.BodyContainer>
          <S.TotalOrderPriceWrapper>
            <S.TotalOrderPriceTitle>총 주문 금액</S.TotalOrderPriceTitle>
            <S.TotalOrderPrice>2800원</S.TotalOrderPrice>
            <S.TotalOrderPriceTitle>할인금액</S.TotalOrderPriceTitle>
            <S.TotalOrderPrice>-2,800원</S.TotalOrderPrice>
          </S.TotalOrderPriceWrapper>
        </S.BodyContainer>

        {/*  */}
        <S.BodyContainer>
          <S.PaymentPriceWrapper>
            <S.PaymentPriceTitle>결제 금액</S.PaymentPriceTitle>
            <S.PaymentPrice>4800원</S.PaymentPrice>
          </S.PaymentPriceWrapper>
        </S.BodyContainer>
      </S.Body>
    </S.Container>
  );
}

export default DetailOrderHistory;
