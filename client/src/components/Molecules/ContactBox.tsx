import React from 'react';
import styled from 'styled-components';
import { ReactComponent as Github } from '../../assets/svg/github.svg';
import { ReactComponent as Instagram } from '../../assets/svg/instagram.svg';
import { ReactComponent as Mail } from '../../assets/svg/mail.svg';

export default function ContactBox() {
  return (
    <Box>
      <a href="https://github.com/chanhong9764" target="_blank" rel="noopener noreferrer">
        <Github width={35} height={35} />
      </a>
      <a href="https://www.instagram.com/cks._.hong" target="_blank" rel="noopener noreferrer">
        <Instagram width={35} height={35} />
      </a>
      <a href="mailto:chanhong9784@naver.com" target="_blank" rel="noopener noreferrer">
        <Mail width={35} height={35} />
      </a>
    </Box>
  );
}

const Box = styled.div`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100px;
  padding: 0 50px;
  border: none;
  margin: 0;
  bottom: 0;
  background-color: ${(props) => props.theme.secondaryColor};
`;
