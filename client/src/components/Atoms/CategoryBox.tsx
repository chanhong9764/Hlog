import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

export default function CategoryBox({ children }: Props) {
  console.log('hi');
  return <Box>{children}</Box>;
}

const Box = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 0 30px;
  border: none;
  background-color: ${(props) => props.theme.primaryColor};
`;
