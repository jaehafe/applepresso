import React from 'react';
import MenuList from '../../../components/MenuList/MenuList';
import { menus } from '../../../constants/data/coffee';

function CoffeeMenu() {
  return (
    <>
      <MenuList menus={menus} />
    </>
  );
}

export default CoffeeMenu;
