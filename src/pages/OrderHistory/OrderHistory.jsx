import React from 'react';
import * as S from './OrderHistory.style';
import { Link, useNavigate } from 'react-router-dom';
import banner1 from '../../assets/homeBanner/banner1.jpeg';
import useGetOrderedMenu from '../../hooks/useGetOrderedMenu';
import { formatDate, formatPrice } from '../../utils/format';

function OrderHistory() {
  const { data, error, loading } = useGetOrderedMenu('/pay');
  const navigate = useNavigate();
  console.log(data);

  const handleToBack = () => {
    navigate(-1);
  };
  return (
    <S.Container>
      <S.HeaderContainer>
        <S.HeaderWrapper>
          <S.HeaderTitleWrapper>
            <S.StyledBsArrowLeft onClick={handleToBack} />
            <S.HeaderTitle>주문내역</S.HeaderTitle>
          </S.HeaderTitleWrapper>
        </S.HeaderWrapper>
      </S.HeaderContainer>
      {/*  */}
      <S.SelectContainer>
        <S.SetDateContainer>
          <S.DateWrapper>
            <S.StyledAiOutlineCalendar />
            <S.Date>2023.02.18 ~ 2023.03.18</S.Date>
          </S.DateWrapper>
          <S.SetDateButton>기간 설정</S.SetDateButton>
        </S.SetDateContainer>
      </S.SelectContainer>
      {/*  */}
      <S.OrderContainer>
        {data?.map((items) => {
          const { id, value } = items;

          const finalPrices = value.orderDetail.map((item) => {
            return item.amount * item.price * (1 - item.discountRate / 100);
          });

          const finalPrice = finalPrices.reduce((acc, val) => {
            return (acc += val);
          }, 0);

          return (
            <S.OrderWrapper key={id}>
              <Link>
                <S.OrderInfoWrapper>
                  <S.OrderInfoLeft>
                    <S.Thumbnail
                      src={value.orderDetail[0].thumbnail}
                      alt={value.orderDetail[0].title}
                    />
                    <S.OrderInfoLeftWrapper>
                      <S.OrderTitle>
                        {value.orderDetail[0].title} 등 {value.orderDetail.length}개
                      </S.OrderTitle>
                      <S.OrderDateWrapper>
                        <S.OrderDateTitle>
                          {value.orderType === 'EASY_ORDER' ? '간편 주문' : '주문'}
                        </S.OrderDateTitle>
                        <S.OrderDate>{formatDate(value.orderDate)}</S.OrderDate>
                      </S.OrderDateWrapper>
                    </S.OrderInfoLeftWrapper>
                  </S.OrderInfoLeft>
                  <S.OrderInfoRight>
                    <S.OrderStatusButton>주문완료</S.OrderStatusButton>
                    <S.PaidAmountTitle>결제금액</S.PaidAmountTitle>
                    <S.PaidAmount>{formatPrice(finalPrice)}원</S.PaidAmount>
                  </S.OrderInfoRight>
                </S.OrderInfoWrapper>
              </Link>
            </S.OrderWrapper>
          );
        })}
      </S.OrderContainer>
    </S.Container>
  );
}

export default OrderHistory;
