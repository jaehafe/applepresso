import React from 'react';
import * as S from './SetMenu.style';
import MenuList from '../../../components/MenuList/MenuList';
import { menuDatas } from '../../../constants/data/menuDatas';
import useGetMenu from '../../../hooks/useGetMenu';

function SetMenu() {
  const { data, loading, error } = useGetMenu('/menu');
  const setMenu = data.filter((menu) => menu.tags.includes('setMenu'));
  return (
    <>
      <MenuList menus={setMenu} />
    </>
  );
}

export default SetMenu;
