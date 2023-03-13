import React from 'react';
import MenuList from '../../../components/MenuList/MenuList';
import useGetMenu from '../../../hooks/useGetMenu';

function MilkTeaLatte() {
  const { data, loading, error } = useGetMenu('/menu');
  const milkTeaLatte = data.filter((menu) => menu.tags.includes('milkTeaLatte'));
  return (
    <>
      <MenuList menus={milkTeaLatte} />
    </>
  );
}

export default MilkTeaLatte;
