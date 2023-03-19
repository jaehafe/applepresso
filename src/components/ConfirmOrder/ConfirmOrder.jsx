import React, { useContext, useEffect, useRef, useState } from 'react';
import * as S from './ConfirmOrder.style';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { formatPrice } from '../../utils/format';
import { CartContext } from '../../contexts/CartContextProvider';
import usePostMenu from '../../hooks/usePostMenu';
import { LoginContext } from '../../contexts/LoginContextProvider';
import { selectPlace, takeoutOptions } from '../../constants/constants';
import MakingRequestModal from '../Modal/MakingRequestModal';
import useKakaoPay from '../../hooks/useKakaoPay';
import SelectPayment from '../SelectPayment/SelectPayment';
import { notify, toastComponent } from '../../hooks/useToastify';
import { orderDate } from '../../utils/format';

import kakaopay_small from '../../assets/kakaopay_small.png';
import ConfirmOrderModal from '../Modal/ConfirmOrderModal';
import { SelectedStoreContext } from '../../contexts/SelectedStoreProvider';

function ConfirmOrder({ cartCtx }) {
  const navigate = useNavigate();
  const { postMenu, error, success } = usePostMenu('/pay');

  const { postKakaoPay } = useKakaoPay();
  const { currentStore } = useContext(SelectedStoreContext);
  const { currentUser } = useContext(LoginContext);
  // 테이크 아웃 장소 선택
  const [selectedPlace, setSelectedPlace] = useState(null);
  const selectPlaceRef = useRef();
  // 제조 / 픽업 요청사항
  const [makingRequestModal, setMakingRequestModal] = useState(false);
  const [makingRequestInput, setMakingRequestInput] = useState(null);

  // 포장 선택
  const [selectedTakeoutOption, setSelectedTakeoutOption] = useState(null);
  const selectTakeoutOptionRef = useRef();
  // 픽업 예정시간
  const [pickupTimeRange, setPickupTimeRange] = useState(0);
  const [selectPayment, setSelectPayment] = useState(null);
  // confirm modal
  const [isOpenConfirmModal, setIsOpenConfirmModal] = useState(false);

  /** 카카오페이 */
  const kakaoPayData = {
    cid: 'TC0ONETIME',
    partner_order_id: 'partner_order_id',
    partner_user_id: 'partner_user_id',
    item_name: `애플프레소 ${cartCtx?.items[0]?.title} 등 ${cartCtx?.items?.length}개`,
    quantity: cartCtx.total.totalQty,
    total_amount: cartCtx.total.finalPrice,
    vat_amount: cartCtx.total.finalPrice / 10,
    tax_free_amount: 0,
    approval_url: 'http://localhost:5173/paymentWaiting',
    fail_url: 'http://localhost:5173/paymentFail',
    cancel_url: 'http://localhost:5173/paymentFail',
  };

  const selectTakeoutPlace = (option) => {
    setSelectedPlace(option);
  };
  const selectTakeoutOption = (option) => {
    setSelectedTakeoutOption(option);
  };

  const handleToBack = () => {
    navigate(-1);
  };
  const navigateToSelectShopPage = () => {
    navigate('/storeInfo');
  };

  const originalPrice = cartCtx.total.originalPrices.reduce((acc, val) => {
    return (acc += val);
  }, 0);

  const discountPrice = cartCtx.total.discountPrices.reduce((acc, val) => {
    return (acc += val);
  }, 0);

  const orderRequest = {
    selectedPlace,
    makingRequestInput,
    selectedTakeoutOption,
    pickupTimeRange,
  };

  const handleClientRect = (optionState, optionRef, message) => {
    if (!optionState) {
      const rectElement = optionRef.current.getBoundingClientRect();
      const absoluteTop = rectElement.top + window.pageYOffset;
      window.scrollTo({ top: absoluteTop - 80, behavior: 'smooth' });
      optionRef.current.focus();
      setTimeout(() => {
        notify(message);
      }, 500);
      return false;
    }
    return true;
  };

  const openConfirmModal = () => {
    console.log('123');
    setIsOpenConfirmModal(!isOpenConfirmModal);
  };

  const handleClosePaymentModal = () => {
    setIsOpenConfirmModal(false);
  };

  const handleOpenPaymentModal = () => {
    setIsOpenConfirmModal(true);
  };

  const handlePayment = () => {
    const isPlaceSelected = handleClientRect(
      selectedPlace,
      selectPlaceRef,
      '장소를 선택해주세요.'
    );
    const isTakeoutOptionSelected = handleClientRect(
      selectedTakeoutOption,
      selectTakeoutOptionRef,
      '포장 방법을 선택해주세요.'
    );
    if (!isPlaceSelected || !isTakeoutOptionSelected) {
      return;
    }

    if (isPlaceSelected && isTakeoutOptionSelected) {
      setIsOpenConfirmModal(true);
    }
  };

  const handleFinalPayment = () => {
    postKakaoPay(kakaoPayData);
    postMenu({
      user: currentUser?.user,
      orderDetail: cartCtx.items,
      orderDate,
      orderType: cartCtx.title === 'EASYORDER' ? 'EASY_ORDER' : 'REGULAR_ORDER',
      orderRequest,
      orderShop: {
        name: currentStore.name,
        address: currentStore.address,
        company_owned: currentStore.company_owned,
      },
    });
    cartCtx.clearCart();
  };

  const handlePaymentTitle = () => {
    if (cartCtx.title === 'EASYORDER') {
      return '간편주문 확인';
    } else if (cartCtx.title === 'CART') {
      return '주문 확인';
    }
    return '주문 확인';
  };

  const handleOpenMakingRequestModal = () => {
    setMakingRequestModal(!makingRequestModal);
  };

  const handlePickupTimeRangeChange = (e) => {
    setPickupTimeRange(e.target.value);
  };

  useEffect(() => {}, [pickupTimeRange, makingRequestInput]);

  const navigateToSelectPaymentPage = () => {
    navigate('/selectPayment', { from: 'SelectPaymentWrapper' });
  };

  return (
    <S.Container>
      {toastComponent()}
      <S.HeaderContainer>
        <S.HeaderWrapper>
          <S.HeaderTitleWrapper>
            <S.StyledBsArrowLeft onClick={handleToBack} />
            <S.HeaderTitle>{handlePaymentTitle()}</S.HeaderTitle>
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
        <S.SelectShopWrapper onClick={navigateToSelectShopPage}>
          <S.SelectShopTitleWrapper>
            <S.SelectShopTitle>주문 매장</S.SelectShopTitle>
            <S.StyledIoIosArrowForward />
          </S.SelectShopTitleWrapper>
          <S.SelectedShopWrapper>
            <S.SelectedShopTitle>{currentStore.name}</S.SelectedShopTitle>
            <S.SelectedShopInfos>
              {currentStore.delivery_available === true ? (
                <S.ShopInfo>배달 가능점</S.ShopInfo>
              ) : (
                ''
              )}
              <S.ShopInfo>
                {currentStore.company_owned === true ? '직영점' : '가맹점'}
              </S.ShopInfo>
            </S.SelectedShopInfos>
          </S.SelectedShopWrapper>
          <S.SelectedShopAddress>{currentStore.address}</S.SelectedShopAddress>
        </S.SelectShopWrapper>
        {/* 테이크 아웃 장소 선택 */}
        <S.SelectTakeoutOptionWrapper>
          <S.SelectTakeoutOptionTitle ref={selectPlaceRef}>
            장소 선택
          </S.SelectTakeoutOptionTitle>
          <S.TakeoutOptionsWrapper>
            {selectPlace.map((option) => {
              const isActive = selectedPlace?.id === option.id;
              return (
                <S.TakeOutOptions
                  key={option.id}
                  $isActive={isActive}
                  onClick={() => selectTakeoutPlace(option)}
                >
                  <S.TakeOutOptionsTitle>{option.option}</S.TakeOutOptionsTitle>
                  <S.TakeOutOptionsSubTitle>
                    ({option.subOption})
                  </S.TakeOutOptionsSubTitle>
                </S.TakeOutOptions>
              );
            })}
          </S.TakeoutOptionsWrapper>
          <S.TakeoutTip>
            <S.StyledBsExclamationCircle />
            <S.Tips>주문 후에는 컵 변경이 불가합니다.</S.Tips>
          </S.TakeoutTip>
          <S.TakeoutRequestMemo onClick={handleOpenMakingRequestModal}>
            제조 / 픽업 요청사항 <S.StyledIoIosArrowForward />
            {/* 요청사항 모달 */}
          </S.TakeoutRequestMemo>

          {makingRequestInput && (
            <S.TakeoutRequestWrapper>
              <S.StyledTbReceipt />
              {makingRequestInput}
            </S.TakeoutRequestWrapper>
          )}
        </S.SelectTakeoutOptionWrapper>
        {/* 제조/픽업 요청사항 모달창 */}
        <MakingRequestModal
          makingRequestModal={makingRequestModal}
          setMakingRequestModal={setMakingRequestModal}
          makingRequestInput={makingRequestInput}
          setMakingRequestInput={setMakingRequestInput}
        />
        {/* 포장 선택 */}
        <S.SelectTakeoutOptionWrapper>
          <S.SelectTakeoutOptionTitle ref={selectTakeoutOptionRef}>
            포장 선택
          </S.SelectTakeoutOptionTitle>
          <S.TakeoutOptionsWrapper>
            {takeoutOptions.map((option) => {
              const isActive = selectedTakeoutOption?.id === option.id;
              return (
                <S.TakeOutOptions
                  key={option.id}
                  $isActive={isActive}
                  onClick={() => selectTakeoutOption(option)}
                >
                  <S.TakeOutOptionsTitle>{option.option}</S.TakeOutOptionsTitle>
                  <S.TakeOutOptionsSubTitle>
                    ({option.subOption})
                  </S.TakeOutOptionsSubTitle>
                </S.TakeOutOptions>
              );
            })}
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
          <S.SelectPickupTime>
            {pickupTimeRange < 5 ? (
              <S.SelectPickupTimeStrong>바로 찾으러 갈게요!</S.SelectPickupTimeStrong>
            ) : (
              <>
                <S.SelectPickupTimeStrong>
                  {pickupTimeRange}분 후{' '}
                </S.SelectPickupTimeStrong>
                매장도착
              </>
            )}
          </S.SelectPickupTime>
          <S.SelectPickupTimeRange
            type="range"
            min={0}
            max={30}
            step={1}
            value={pickupTimeRange}
            onChange={(e) => handlePickupTimeRangeChange(e)}
          />
          <S.SelectPickupTimeTip>
            도착 시간에 맞춰 음료를 제조해 드립니다.
          </S.SelectPickupTimeTip>
        </S.SelectPickupTimeWrapper>
        {/* 결제 정보 (카드 추가 페이지 만들어야 함, 카카오 페이도 대응)*/}
        <S.SelectPaymentWrapper onClick={navigateToSelectPaymentPage}>
          <S.SelectPaymentHeaderWrapper>
            <S.SelectPaymentTitleWrapper>결제 정보</S.SelectPaymentTitleWrapper>
            <S.StyledIoIosArrowForward />
          </S.SelectPaymentHeaderWrapper>
          <S.SelectPaymentInfo>
            <S.SelectedPaymentIMG src={kakaopay_small} />
            카카오 페이
          </S.SelectPaymentInfo>
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
            <S.PaymentPrice>{formatPrice(cartCtx.total.finalPrice)}원</S.PaymentPrice>
          </S.PaymentPriceWrapper>
        </S.PaymentCalcWrapper>
        {/*  */}
        <S.PaymentButtonContainer>
          <S.PaymentButtonWrapper onClick={handlePayment}>
            주문 결제하기
          </S.PaymentButtonWrapper>
        </S.PaymentButtonContainer>
        {isOpenConfirmModal && (
          <ConfirmOrderModal
            onCloseModal={handleClosePaymentModal}
            handlePayment={handlePayment}
            handleFinalPayment={handleFinalPayment}
          />
        )}
        {/*  */}
      </S.BodyPaddingTop>
    </S.Container>
  );
}
export default ConfirmOrder;
