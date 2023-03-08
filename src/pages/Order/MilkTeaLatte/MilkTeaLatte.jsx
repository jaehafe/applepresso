import React from 'react';
import { milkTeaLatte as menus } from '../../../constants/data/milkTeaLatte';
import MenuList from '../../../components/MenuList/MenuList';
import { menuDatas } from '../../../constants/data/menuDatas';

const milkTeaLatte = menuDatas.filter((menu) => menu.tags.includes('milkTeaLatte'));

function MilkTeaLatte() {
  return (
    <>
      <MenuList menus={milkTeaLatte} />
    </>
  );
}

export default MilkTeaLatte;
