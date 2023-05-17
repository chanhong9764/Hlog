import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function ReactLink({ href, children }: Props) {
  return <StyledLink to={href}>{children}</StyledLink>;
}

const StyledLink = styled(Link)`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
