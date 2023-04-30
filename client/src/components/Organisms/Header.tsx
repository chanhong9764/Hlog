import React from 'react';
import styled from 'styled-components';
import { CgMenu } from 'react-icons/cg';
import CustomText from 'components/Atoms/CustomText';

function Header() {
  return (
    <HeaderBg>
      <CgMenu />
      <CustomText fontWeight={500} fontSize={20}>
        HLog
      </CustomText>
    </HeaderBg>
  );
}

export default Header;

const HeaderBg = styled.div`
  background-color: ${(props) => props.theme.bgColor};
  justify-content: space-between;
  height: 100px;
`;
