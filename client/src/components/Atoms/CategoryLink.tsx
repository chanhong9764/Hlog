import React from 'react';
import styled from 'styled-components';
import findCategory from 'utils/findCategory';

interface isCheck {
  check: boolean;
}

interface Props {
  href: string;
  children: React.ReactNode;
}

export default function CategoryLink({ href, children }: Props) {
  return (
    <Link href={href} check={findCategory(href)}>
      {children}
    </Link>
  );
}

const Link = styled.a<isCheck>`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: ${(props) => (props.check ? 'solid' : 'none')};
  border-color: black;
`;
