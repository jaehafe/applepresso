import React, { useContext, useEffect, useRef, useState } from 'react';
import * as S from './Cart.style';
import { useNavigate } from 'react-router-dom';
import { menuDatas } from '../../constants/data/menuDatas';
import CartContext from '../../store/CartContext';

// const coffeeData = menuDatas.filter((menu) => menu.tags.includes('coffee'));
// console.log(coffeeData);

function Cart() {
  const navigate = useNavigate();
  const MenuCountRef = useRef(null);
  const cartCtx = useContext(CartContext);
  const [deleteMenu, setDeleteMenu] = useState(false);
  const [checkedMenus, setCheckedMenus] = useState([]);
  const [cartMenus, setCartMenus] = useState([]);
  const [total, setTotal] = useState({ totalPrice: 0, totalQty: 0 });
  const [menuCount, setMenuCount] = useState(null);

  /** 총 가격, 수량 렌더링 함수 */
  const calculateTotalPriceQty = () => {
    const { totalPrice, totalQty } = cartMenus.reduce(
      (acc, menu) => {
        acc.totalPrice += menu.price;
        acc.totalQty++;
        return acc;
      },
      // 초기값
      { totalPrice: 0, totalQty: 0 }
    );
    // total 상태에 저장
    setTotal({ totalPrice, totalQty });

    // useEffect 사용을 위한 return 값
    return {
      totalPrice: totalPrice.toLocaleString(),
      totalQty,
    };
  };

  /** 휴지통 아이콘 클릭 시 체크박스 보여지게 하기 */
  const handleRemoveMenu = () => {
    setDeleteMenu(!deleteMenu);
  };

  /** 체크메뉴 핸들링 */
  const handleCheckMenu = (id) => {
    const updatedMenus = cartMenus.map((menu) => {
      if (menu.id === id) {
        return {
          ...menu,
          isChecked: !menu.isChecked,
        };
      } else {
        return { ...menu };
      }
    });

    console.log('updatedMenus', updatedMenus);
    setCartMenus(updatedMenus);
    const updatedCheckedMenu = updatedMenus.filter((menu) => menu.isChecked === true);
    console.log('updatedCheckedMenu', updatedCheckedMenu);
    setCheckedMenus(updatedCheckedMenu);
  };

  /** 완료 버튼을 클릭하면 checkbox 모두 false로 수정 */
  const handleChangeToAllFalse = () => {
    const updatedMenus = cartMenus.map((menu) => ({ ...menu, isChecked: false }));
    setCartMenus(updatedMenus);
    setCheckedMenus([]);
  };

  /** checkbox 전체 선택 */
  const handleSelectAll = () => {
    const updatedMenus = cartMenus.map((menu) => ({ ...menu, isChecked: true }));
    setCartMenus(updatedMenus);
    setCheckedMenus(updatedMenus);
    // setCheckedMenus([]);
  };

  /** 선택한 메뉴만 카트에서 삭제 */
  const handleDeleteSelectedMenuFromCart = () => {
    console.log('cartMenus', cartMenus);
    alert('선택한 메뉴를 삭제하시겠습니까?');

    const updatedCheckedMenu = cartMenus.filter((menu) => menu.isChecked === false);
    // setCheckedMenus(updatedCheckedMenu);
    console.log('checkedMenus', checkedMenus);
    setCartMenus(updatedCheckedMenu);
  };

  const handleToBack = () => {
    navigate(-1);
  };

  /** 태그가 커피인 것만 렌더링 될 때 가져오기(성능이슈) */
  useEffect(() => {
    // setCartMenus(cartCtx.items.filter((menu) => menu.tags.includes('coffee')));
    setCartMenus(cartCtx.items);
  }, [cartCtx.items]);

  const addToCartHandler = () => {
    cartCtx.addItem({});
  };

  const handleMinusMenuCount = () => {};

  const handlePlusMenuCount = () => {
    // setMenuCount(menuCount + 1);
    addToCartHandler();
  };

  useEffect(() => {
    const { totalPrice, totalQty } = calculateTotalPriceQty();
    console.log('checkedMenus updated:', checkedMenus);
    console.log('cartMenus updated', cartMenus);
  }, [checkedMenus, cartMenus]);

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.HeaderWrapper>
          <S.HeaderTitleWrapper>
            <S.StyledBsArrowLeft onClick={handleToBack} />
            <S.HeaderTitle>담기 ({cartMenus.length}개)</S.HeaderTitle>
          </S.HeaderTitleWrapper>
          <div onClick={handleRemoveMenu}>
            {deleteMenu ? (
              <div onClick={handleChangeToAllFalse}>완료</div>
            ) : (
              <S.StyledHiOutlineTrash />
            )}
          </div>
        </S.HeaderWrapper>
      </S.HeaderContainer>
      <S.CartBody>
        {cartMenus.map((menu) => {
          const { id, thumbnail, title, price, discountRate, isChecked, amount } = menu;
          const discountPrice = ((amount * price) / discountRate)
            .toFixed(0)
            .toLocaleString();
          const finalPrice = (amount * price - discountPrice).toLocaleString();

          return (
            <S.OrderDetailWrapper key={id}>
              {/* 체크 박스 */}
              {deleteMenu ? (
                <S.CheckBox
                  type="checkbox"
                  checked={isChecked}
                  onChange={() => handleCheckMenu(id)}
                />
              ) : (
                ''
              )}
              <S.OrderDetail>
                <S.ThumbnailWrapper>
                  <S.Thumbnail src={thumbnail} alt={title} />
                  <S.MenuCountWrapper>
                    <S.MenuCountMinus onClick={handleMinusMenuCount}>-</S.MenuCountMinus>
                    <S.MenuCount ref={MenuCountRef}>{amount}</S.MenuCount>
                    <S.MenuCountPlus onClick={handlePlusMenuCount}>+</S.MenuCountPlus>
                  </S.MenuCountWrapper>
                </S.ThumbnailWrapper>
                <S.OrderInfo>
                  <S.TitleWrapper>
                    <S.Title>{title}</S.Title>
                    <S.Price>{(amount * price).toLocaleString()}원</S.Price>
                  </S.TitleWrapper>
                  {discountRate && (
                    <S.Options>
                      <S.Option>이벤트 할인</S.Option>
                      <S.OptionPrice>-{discountPrice.toLocaleString()}원</S.OptionPrice>
                    </S.Options>
                  )}
                  <S.TotalWrapper>
                    <S.TotalTitle>합계</S.TotalTitle>
                    <S.TotalPrice>{finalPrice}원</S.TotalPrice>
                  </S.TotalWrapper>
                </S.OrderInfo>
              </S.OrderDetail>
            </S.OrderDetailWrapper>
          );
        })}
        {/*  */}
      </S.CartBody>
      <S.ButtonContainer deleteMenu={deleteMenu}>
        {' '}
        {deleteMenu ? (
          <>
            <S.SelectAllButton>
              {checkedMenus.length ? (
                <div onClick={handleChangeToAllFalse}>선택해제</div>
              ) : (
                <div onClick={handleSelectAll}>전체선택</div>
              )}
            </S.SelectAllButton>
            <S.DeleteSelectedMenuButton
              selectedMenus={checkedMenus.length ? true : false}
              onClick={handleDeleteSelectedMenuFromCart}
            >
              삭제하기
            </S.DeleteSelectedMenuButton>
          </>
        ) : (
          <S.OrderButtonWrapper>
            <S.OrderCalculateWrapper>
              <S.OrderTotalCount>총 {total.totalQty}개</S.OrderTotalCount>
              <S.OrderTotalPrice>{total.totalPrice.toLocaleString()}원</S.OrderTotalPrice>
            </S.OrderCalculateWrapper>
            <S.OrderButton>주문하기</S.OrderButton>
          </S.OrderButtonWrapper>
        )}
      </S.ButtonContainer>
    </S.Container>
  );
}

export default Cart;
