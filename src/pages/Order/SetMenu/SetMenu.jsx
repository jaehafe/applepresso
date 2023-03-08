import React from 'react';
import * as S from './SetMenu.style';
import MenuList from '../../../components/MenuList/MenuList';
import { setMenu as menus } from '../../../constants/data/setMenu';

function SetMenu() {
  return (
    <>
      <MenuList menus={menus} />
    </>
  );
}

export default SetMenu;
