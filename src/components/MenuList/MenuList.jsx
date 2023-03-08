import React from 'react';
import Menu from '../Menu/Menu';
import * as S from './MenuList.style';
import { useNavigate, useParams } from 'react-router-dom';

function MenuList(props) {
  console.log(props);
  const navigate = useNavigate();

  const handleMenu = (id) => {
    console.log('123');
    navigate(`/menuDetail/${id}`);
  };

  return (
    <S.Container>
      <S.MenuLists>
        {props.menus.map((menu) => (
          <Menu
            key={menu.id}
            {...menu}
            value={menu.id}
            onClick={() => handleMenu(menu.id)}
          />
        ))}
      </S.MenuLists>
    </S.Container>
  );
}

export default MenuList;
