import React from 'react';
import { Link } from 'react-router-dom';
import useGetOrderedMenu from '../../hooks/useGetOrderedMenu';
import { formatDate, formatPrice } from '../../utils/format';
import Loading from '../Loading.jsx/Loading';
import * as S from './OrderHistoryMenu.style';

function OrderHistoryMenu({ filteredData }) {
  const { loading } = useGetOrderedMenu('/pay');

  if (loading) {
    return <Loading />;
  }
  return (
    <S.OrderContainer>
      {filteredData &&
        filteredData.map((items) => {
          const { id, value } = items;

          const finalPrices = value?.orderDetail?.map((item) => {
            return item.amount * item.price * (1 - item.discountRate / 100);
          });

          const finalPrice = finalPrices?.reduce((acc, val) => {
            return (acc += val);
          }, 0);

          return (
            <S.OrderWrapper key={id}>
              <Link to={`/orderHistory/${id}`}>
                <S.OrderInfoWrapper>
                  <S.OrderInfoLeft>
                    <S.Thumbnail
                      src={value.orderDetail[0].thumbnail}
                      alt={value.orderDetail[0].title}
                    />
                    <S.OrderInfoLeftWrapper>
                      <S.OrderShopInfoWrapper>
                        <S.StyledFiMapPin />
                        <S.OrderShopInfoName>{value.orderShop.name}</S.OrderShopInfoName>
                      </S.OrderShopInfoWrapper>
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
  );
}

export default OrderHistoryMenu;
