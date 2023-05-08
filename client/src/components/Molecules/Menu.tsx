import React from 'react';
import { CgMenu } from 'react-icons/cg';
import HeaderBox from 'components/Atoms/HeaderBox';
import useConfig from 'hooks/useConfig';

function Menu() {
  const { openMenu } = useConfig();
  return (
    <HeaderBox onClick={openMenu}>
      <CgMenu size={30} color="white" />
    </HeaderBox>
  );
}

export default Menu;
