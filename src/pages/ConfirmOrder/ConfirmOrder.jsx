import React from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from './ConfirmOrder.style';

function ConfirmOrder() {
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
        {/*  */}
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
        {/*  */}
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
        {/*  */}
        <S.SelectCouponWrapper>
          <S.SelectCouponHeaderWrapper>
            <S.SelectCouponTitleWrapper>
              <S.SelectCouponTitle>쿠폰</S.SelectCouponTitle>
              <S.StyledBsExclamationCircle />
            </S.SelectCouponTitleWrapper>
            <S.StyledIoIosArrowForward />
          </S.SelectCouponHeaderWrapper>
        </S.SelectCouponWrapper>
      </S.BodyPaddingTop>
    </S.Container>
  );
}
export default ConfirmOrder;
