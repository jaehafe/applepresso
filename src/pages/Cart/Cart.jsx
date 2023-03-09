import React, { useEffect, useState } from 'react';
import * as S from './Cart.style';
import { useNavigate } from 'react-router-dom';
import { menuDatas } from '../../constants/data/menuDatas';

// const coffeeData = menuDatas.filter((menu) => menu.tags.includes('coffee'));
// console.log(coffeeData);

function Cart() {
  const navigate = useNavigate();
  const [deleteMenu, setDeleteMenu] = useState(false);
  const [checkedMenus, setCheckedMenus] = useState([]);
  const [coffeeData, setCoffeeData] = useState([]);

  useEffect(() => {
    setCoffeeData(menuDatas.filter((menu) => menu.tags.includes('coffee')));
  }, []);

  const handleRemoveMenu = () => {
    setDeleteMenu(!deleteMenu);
  };

  const handleCheckMenu = (id) => {
    const updatedMenus = coffeeData.map((menu) => {
      if (menu.id === id) {
        return {
          ...menu,
          isChecked: !menu.isChecked,
        };
      } else {
        return { ...menu };
      }
    });

    const updatedCheckedMenu = updatedMenus.filter((menu) => menu.isChecked === true);
    console.log('updatedCheckedMenu', updatedCheckedMenu);
    setCheckedMenus(updatedCheckedMenu);
    console.log('updatedMenus', updatedMenus);
    setCoffeeData(updatedMenus);
  };

  /** 완료 버튼을 클릭하면 checkbox 모두 false로 수정 */
  const handleChangeToAllFalse = () => {
    // const updatedMenus = coffeeData.map((menu) => ({ ...menu, isChecked: false }));
    setCheckedMenus([]);
  };

  const handleDeleteSelectedMenuFromCart = () => {
    const updatedMenus = checkedMenus.filter((menu) => menu.isChecked === true);
    setCheckedMenus(updatedMenus);
    console.log('checkedMenus', checkedMenus);
  };
  const handleToBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    console.log('checkedMenus updated:', checkedMenus);
  }, [checkedMenus]);

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.HeaderWrapper>
          <S.HeaderTitleWrapper>
            <S.StyledBsArrowLeft onClick={handleToBack} />
            <S.HeaderTitle>담기 ({coffeeData.length}개)</S.HeaderTitle>
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
        {coffeeData.map((menu) => {
          const { id, thumbnail, title, price, discountRate, isChecked } = menu;
          const discountPrice = (price / discountRate).toFixed(0).toLocaleString();
          const finalPrice = (price - discountPrice).toLocaleString();

          return (
            <S.OrderDetailWrapper key={id}>
              {/* 체크 박스 */}
              {deleteMenu ? (
                <S.CheckBox
                  type="checkbox"
                  // checked={isChecked}
                  onChange={() => handleCheckMenu(id)}
                />
              ) : (
                ''
              )}
              <S.OrderDetail>
                <S.ThumbnailWrapper>
                  <S.Thumbnail src={thumbnail} alt={title} />
                </S.ThumbnailWrapper>
                <S.OrderInfo>
                  <S.TitleWrapper>
                    <S.Title>{title}</S.Title>
                    <S.Price>{price.toLocaleString()}</S.Price>
                  </S.TitleWrapper>
                  {discountRate && (
                    <S.Options>
                      <S.Option>이벤트 할인</S.Option>
                      <S.OptionPrice>-{discountPrice}원</S.OptionPrice>
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
      <S.ButtonContainer>
        {' '}
        {deleteMenu ? (
          <>
            <S.SelectAllButton>
              {checkedMenus.length ? (
                <div onClick={handleRemoveMenu}>선택해제</div>
              ) : (
                <div>전체선택</div>
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
          <S.OrderButton>주문하기</S.OrderButton>
        )}
      </S.ButtonContainer>
    </S.Container>
  );
}

export default Cart;
