import React from 'react';
import * as S from './SetMenu.style';
import MenuList from '../../../components/MenuList/MenuList';
import { menuDatas } from '../../../constants/data/menuDatas';

const setMenu = menuDatas.filter((menu) => menu.tags.includes('setMenu'));

function SetMenu() {
  return (
    <>
      <MenuList menus={setMenu} />
    </>
  );
}

export default SetMenu;
