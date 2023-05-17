import React from 'react';
import styled from 'styled-components';
import Menu from 'components/Molecules/Menu';
import Title from 'components/Molecules/Title';
import Search from 'components/Molecules/Search';

interface Props {
  isOpen: boolean;
  setisOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Header({ isOpen, setisOpen }: Props) {
  return (
    <HeaderBg>
      <Menu setisOpen={setisOpen} isOpen={isOpen} />
      <Title />
      <Search />
    </HeaderBg>
  );
}

export default Header;

const HeaderBg = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.secondaryColor};
  height: 100px;
  padding: 0 30px;
`;
