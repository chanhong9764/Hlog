import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

export default function CategoryList({ children }: Props) {
  return <ListBox>{children}</ListBox>;
}

export const ListBox = styled.li`
  display: table;
  width: 100%;
  user-select: none;
  color: white;
  background-color: ${(props) => props.theme.secondaryColor};
`;
