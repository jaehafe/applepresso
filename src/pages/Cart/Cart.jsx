import React, { useContext, useEffect, useRef, useState } from 'react';
import * as S from './Cart.style';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../contexts/CartContextProvider';

function Cart() {
  const navigate = useNavigate();

  const cartCtx = useContext(CartContext);
  const [deleteMenu, setDeleteMenu] = useState(false);
  const [checkedMenus, setCheckedMenus] = useState([]);
  const [cartMenus, setCartMenus] = useState([]);
  console.log('cartCtx', cartCtx);
  /** 뒤로가기 */
  const handleToBack = () => {
    navigate(-1);
  };

  const navigateToConfirmOrder = () => {
    navigate('/confirmOrder');
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
  };

  /** 선택한 메뉴만 카트에서 삭제 */
  const handleDeleteSelectedMenuFromCart = () => {
    console.log('cartMenus', cartMenus);
    // 체크된 메뉴들
    const checkedMenus = cartMenus.filter((menu) => menu.isChecked === true);
    // 체크된 메뉴들의 id
    const checkedMenuIds = checkedMenus.map((menu) => menu.id);
    // 체크된 메뉴들의 id에 해당하지 않는 나머지 메뉴들
    const updatedCheckedMenu = cartMenus.filter(
      (menu) => !checkedMenuIds.includes(menu.id)
    );

    if (checkedMenuIds.length > 0) {
      const confirmDelete = window.confirm('선택한 메뉴를 삭제하시겠습니끼?');
      if (confirmDelete) {
        checkedMenuIds.forEach((id) => cartCtx.removeCheckedItem(id));
      }
    }
    setCartMenus(updatedCheckedMenu);
    setCheckedMenus([]);
  };

  /** 카트에 담긴 메뉴만 렌더링 될 때 가져오기(성능이슈) */
  useEffect(() => {
    setCartMenus(cartCtx.items);
  }, [cartCtx.items]);

  const handleMinusMenuCount = (id) => {
    cartCtx.removeItem(id);
  };

  const addToCartHandler = (infos) => {
    cartCtx.addItem({
      id: infos.id,
      title: infos.title,
      amount: 1,
      price: infos.price,
      thumbnail: infos.thumbnail,
      discountRate: infos.discountRate,
      isChecked: infos.isChecked,
    });
  };

  const handlePlusMenuCount = ({ ...infos }) => {
    addToCartHandler(infos);
  };

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.HeaderWrapper>
          <S.HeaderTitleWrapper>
            <S.StyledBsArrowLeft onClick={handleToBack} />
            <S.HeaderTitle>담기 ({cartCtx.total.totalQty}개)</S.HeaderTitle>
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
          const discountPrice =
            amount * price - amount * price * (1 - discountRate / 100);
          const finalPrice = amount * price - discountPrice;

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
                    <S.MenuCountMinus onClick={() => handleMinusMenuCount(id)}>
                      -
                    </S.MenuCountMinus>
                    <S.MenuCount>{amount}</S.MenuCount>
                    <S.MenuCountPlus
                      onClick={() =>
                        handlePlusMenuCount({
                          id,
                          title,
                          amount,
                          price,
                          thumbnail,
                          discountRate,
                          isChecked,
                        })
                      }
                    >
                      +
                    </S.MenuCountPlus>
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
                    <S.TotalPrice>{finalPrice.toLocaleString()}원</S.TotalPrice>
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
              <S.OrderTotalCount>총 {cartCtx.total.totalQty}개</S.OrderTotalCount>
              <S.OrderTotalPrice>
                {cartCtx.total?.finalPrice?.toLocaleString()}원
              </S.OrderTotalPrice>
            </S.OrderCalculateWrapper>
            <S.OrderButton onClick={navigateToConfirmOrder}>주문하기</S.OrderButton>
          </S.OrderButtonWrapper>
        )}
      </S.ButtonContainer>
    </S.Container>
  );
}

export default Cart;
