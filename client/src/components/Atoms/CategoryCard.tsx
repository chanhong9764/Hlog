import React from 'react';
import styled from 'styled-components';

interface BoxColor {
  backgroundColor?: string;
}

interface Props extends BoxColor {
  onClick: () => void;
  children: React.ReactNode;
}

export default function Card({ backgroundColor, onClick, children }: Props) {
  return (
    <Box onClick={onClick} backgroundColor={backgroundColor}>
      {children}
    </Box>
  );
}

const Box = styled.button<BoxColor>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 70px;
  height: 70px;
  border: none;
  background-color: ${(props) => props.backgroundColor || props.theme.secondaryColor};
  &:hover {
    cursor: pointer;
  }
`;
