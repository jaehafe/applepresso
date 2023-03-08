import React from 'react';
import MenuList from '../../../components/MenuList/MenuList';
import { menuDatas } from '../../../constants/data/menuDatas';

const coffeeData = menuDatas.filter((menu) => menu.tags.includes('coffee'));

function CoffeeMenu() {
  return (
    <>
      <MenuList menus={coffeeData} />
    </>
  );
}

export default CoffeeMenu;
