import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import useConfig from 'hooks/useConfig';
import CategoryClose from 'components/Molecules/CategoryClose';
import CategoryItem from 'components/Molecules/CategoryItem';
import ContactBox from 'components/Molecules/ContactBox';

interface Props {
  isOpen: boolean;
}

interface isOpenMenu {
  isOpenMenu: boolean;
}

function SideMenu({ isOpen }: Props) {
  const { openMenu, isOpenMenu, getCategories } = useConfig();

  // 카테고리 데이터 요청
  useEffect(() => {
    getCategories();
  }, []);

  return (
    <>
      {isOpenMenu && <SideMenuBg onClick={openMenu} />}
      {isOpen && (
        <SideMenuBox isOpenMenu={isOpenMenu}>
          <CategoryClose />
          <CategoryItem />
          <ContactBox />
        </SideMenuBox>
      )}
    </>
  );
}

export default SideMenu;

const SideMenuBg = styled.div`
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

const SideMenuBox = styled.nav<isOpenMenu>`
  @keyframes showUp {
    0% {
      transform: translate(-100%, 0);
    }

    100% {
      transform: translate(0, 0);
    }
  }

  @keyframes showOut {
    0% {
      transform: translate(0, 0);
    }

    100% {
      transform: translate(-100%, 0);
      display: none;
    }
  }

  width: 300px;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  background-color: ${(props) => props.theme.secondaryColor};
  animation: 0.7s ${(props) => (props.isOpenMenu ? 'showUp' : 'showOut')} forwards;
  z-index: 200;
`;
