import React from 'react';
import MenuList from '../../../components/MenuList/MenuList';
import { menuDatas } from '../../../constants/data/menuDatas';
import useGetMenu from '../../../hooks/useGetMenu';

function CoffeeMenu() {
  const { data, loading, error } = useGetMenu();
  const coffeeData = data.filter((menu) => menu.tags.includes('coffee'));
  return (
    <>
      <MenuList menus={coffeeData} />
    </>
  );
}

export default CoffeeMenu;
