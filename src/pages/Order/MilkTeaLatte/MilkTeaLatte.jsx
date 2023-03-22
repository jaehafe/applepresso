import React from 'react';
import * as S from './MilkTeaLatte.style';
import MenuList from '../../../components/MenuList/MenuList';
import useGetMenu from '../../../hooks/useGetMenu';

function MilkTeaLatte() {
  const { data, loading, error, refetchData } = useGetMenu('/menu');
  const milkTeaLatte = data.filter((menu) => menu.tags.includes('milkTeaLatte'));

  return (
    <S.Container>
      <MenuList
        menus={milkTeaLatte}
        loading={loading}
        error={error}
        refetchData={refetchData}
      />
    </S.Container>
  );
}

export default MilkTeaLatte;
