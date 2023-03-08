import React from 'react';
import Menu from '../Menu/Menu';
import * as S from './MenuList.style';
import { useNavigate } from 'react-router-dom';

function MenuList(props) {
  console.log(props);
  const navigate = useNavigate();

  const handleMenu = (e) => {
    console.log(e.target.value);
  };

  return (
    <S.Container>
      <S.MenuLists>
        {props.menus.map((menu) => (
          <Menu key={menu.id} {...menu} value={menu.id} onClick={handleMenu} />
        ))}
      </S.MenuLists>
    </S.Container>
  );
}

export default MenuList;
