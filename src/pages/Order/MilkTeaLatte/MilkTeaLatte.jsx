import React from 'react';
import { milkTeaLatte as menus } from '../../../constants/data/milkTeaLatte';
import MenuList from '../../../components/MenuList/MenuList';

function MilkTeaLatte() {
  return (
    <>
      <MenuList menus={menus} />
    </>
  );
}

export default MilkTeaLatte;
