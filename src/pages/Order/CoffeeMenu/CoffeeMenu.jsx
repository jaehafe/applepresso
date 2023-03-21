import React from 'react';
import Loading from '../../../components/Loading.jsx/Loading';
import MenuList from '../../../components/MenuList/MenuList';
import useGetMenu from '../../../hooks/useGetMenu';

function CoffeeMenu() {
  const { data, loading, error, refetchData } = useGetMenu('/menu');
  const coffeeData = data.filter((menu) => menu.tags.includes('coffee'));

  return (
    <>
      <MenuList
        menus={coffeeData}
        loading={loading}
        error={error}
        refetchData={refetchData}
      />
    </>
  );
}

export default CoffeeMenu;
