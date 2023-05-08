import React from 'react';
import styled from 'styled-components';

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function CustomLink({ href, children }: Props) {
  return <Link href={href}>{children}</Link>;
}

const Link = styled.a`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
`;
