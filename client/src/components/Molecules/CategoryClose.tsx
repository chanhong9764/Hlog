import React from 'react';
import styled from 'styled-components';
import HeaderBox from 'components/Atoms/CategoryCard';
import { AiOutlineClose } from 'react-icons/ai';
import useConfig from 'hooks/useConfig';

export default function CategoryClose() {
  const { openMenu } = useConfig();

  return (
    <Box>
      <HeaderBox onClick={openMenu}>
        <AiOutlineClose size={30} color="white" />
      </HeaderBox>
    </Box>
  );
}

const Box = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 0 30px;
  border: none;
  margin: 0;
  background-color: ${(props) => props.theme.secondaryColor};
`;
