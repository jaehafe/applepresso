import React from 'react';
import MenuList from '../../../components/MenuList/MenuList';
import useGetMenu from '../../../hooks/useGetMenu';

function CoffeeMenu() {
  const { data, loading, error } = useGetMenu('/menu');
  const coffeeData = data.filter((menu) => menu.tags.includes('coffee'));
  return (
    <>
      <MenuList menus={coffeeData} />
    </>
  );
}

export default CoffeeMenu;
