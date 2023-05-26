import React from 'react';
import * as S from './CoffeeMenu.style';
import MenuList from '../../../components/MenuList/MenuList';
import useGetMenu from '../../../hooks/useGetMenu';

function CoffeeMenu() {
  const { data, loading, error, refetchData } = useGetMenu('/menu');
  const coffeeData = data.filter((menu) => menu.tags.includes('coffee'));

  return (
    <S.Container>
      <MenuList menus={coffeeData} loading={loading} error={error} refetchData={refetchData} />
    </S.Container>
  );
}

export default CoffeeMenu;
