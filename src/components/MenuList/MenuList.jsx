import React from 'react';
import Menu from '../Menu/Menu';
import * as S from './MenuList.style';
import { useNavigate, useParams } from 'react-router-dom';

function MenuList(props) {
  console.log(props);

  return (
    <S.Container>
      <S.MenuLists>
        {props.menus.map((menu) => (
          <Menu key={menu.id} {...menu} value={menu.id} />
        ))}
      </S.MenuLists>
    </S.Container>
  );
}

export default MenuList;
