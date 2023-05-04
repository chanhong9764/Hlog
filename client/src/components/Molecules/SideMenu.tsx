import React from 'react';
import styled from 'styled-components';
import { GrClose } from 'react-icons/gr';
import HeaderBox from 'components/Atoms/HeaderBox';
import CategoryBox from 'components/Atoms/CategoryBox';
import CustomText from 'components/Atoms/CustomText';
import CategoryLink from 'components/Atoms/CategoryLink';
import useConfig from 'hooks/useConfig';
import { Category } from '../../@types/config';

interface isOpenMenu {
  isOpenMenu: boolean;
}

function SideMenu() {
  const { openMenu, isOpenMenu } = useConfig();
  const categories = [
    {
      id: 0,
      name: 'HOME',
      href: '/',
    },
    {
      id: 1,
      name: 'ALGORITHM',
      href: '/algorithm',
    },
    {
      id: 2,
      name: 'SECURITY',
      href: '/security',
    },
    {
      id: 3,
      name: 'PROGRAMMING',
      href: '/programming',
    },
  ];

  return (
    <>
      {isOpenMenu && <SideMenuBg onClick={openMenu} />}
      <SideMenuBox isOpenMenu={isOpenMenu}>
        <CategoryBox>
          <HeaderBox onClick={openMenu} backgroundColor="white">
            <GrClose size={20} />
          </HeaderBox>
        </CategoryBox>
        {categories &&
          categories.map((category: Category) => {
            return (
              <CategoryBox key={category.id}>
                <CategoryLink href={category.href}>
                  <CustomText fontSize={18} fontWeight={500}>
                    {category.name}
                  </CustomText>
                </CategoryLink>
              </CategoryBox>
            );
          })}
      </SideMenuBox>
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
  background-color: ${(props) => props.theme.primaryColor};
  animation: 0.7s ${(props) => (props.isOpenMenu ? 'showUp' : 'showOut')} forwards;
`;
