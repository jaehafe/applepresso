import React, { useEffect, useState } from 'react';
import * as S from './BestMenu.style';
import useGetOrderedMenu from '../../hooks/useGetOrderedMenu';
import Loading from '../Loading.jsx/Loading';
import useGetMenu from '../../hooks/useGetMenu';

function BestMenu() {
  const { data, loading, error, refetchData } = useGetOrderedMenu('/pay');

  if (loading) {
    return <Loading />;
  }
  if (error) {
    return (
      <S.ButtonContainer>
        <S.TitleWrapper>
          <S.RetryTitle>요청사항을 처리하는데 실패했습니다.</S.RetryTitle>
          <S.RetrySubtitle>잠시 후 다시 시도해주세요</S.RetrySubtitle>
        </S.TitleWrapper>
        <S.RetryButton
          style={{ cursor: 'pointer' }}
          onClick={() => {
            refetchData();
          }}
        >
          다시 시도하기
        </S.RetryButton>
      </S.ButtonContainer>
    );
  }

  const values = data.map((item) => {
    return item.value.orderDetail;
  });

  // 주문 횟수를 카운팅
  const countOrders = (values) => {
    let orderCounts = {};

    values.forEach((array) => {
      array.forEach((item) => {
        if (orderCounts[item.id]) {
          orderCounts[item.id].count++;
        } else {
          orderCounts[item.id] = { ...item, count: 1 };
        }
      });
    });

    return orderCounts;
  };

  // 주문 횟수를 기준으로 내림차순 정렬
  const sortByOrders = (orderCounts) => {
    let sortedOrders = Object.values(orderCounts);

    sortedOrders.sort((a, b) => b.count - a.count);

    return sortedOrders;
  };

  const orderCounts = countOrders(values);
  const sortedByBestMenus = sortByOrders(orderCounts);

  console.log('orderCounts', orderCounts);
  console.log('sortedByBestMenus', sortedByBestMenus);

  return (
    <>
      {sortedByBestMenus ? (
        <S.BannerContainer>
          <S.BannerSlides>
            {sortedByBestMenus.map((item) => {
              const { id, thumbnail, title, count } = item;
              return (
                <S.BannerWrapper key={id}>
                  <S.MenuThumbnail src={thumbnail} alt={title} />
                  <S.MenuInfo>
                    <S.MenuTitle>{title}</S.MenuTitle>
                    <S.MenuCount>{count}개</S.MenuCount>
                  </S.MenuInfo>
                </S.BannerWrapper>
              );
            })}
          </S.BannerSlides>
        </S.BannerContainer>
      ) : (
        <S.AddEasyOrderButton>
          <S.AddEasyOrderList>
            <S.StyledFaRegHandPointer />
            <S.AddEasyOrderDesc>주문 내역이 아직 없네요.</S.AddEasyOrderDesc>
          </S.AddEasyOrderList>
          <S.AddEasyOrderExtraListButton>+</S.AddEasyOrderExtraListButton>
        </S.AddEasyOrderButton>
      )}
    </>
  );
}

export default BestMenu;
