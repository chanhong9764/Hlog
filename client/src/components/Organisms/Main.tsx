import React from 'react';
import styled from 'styled-components';

function Main() {
  return (
    <MainBg>
      <div>hi</div>
      <div>hi</div>
      <div>hi</div>
    </MainBg>
  );
}

export default Main;

const MainBg = styled.div`
  background-color: ${(props) => props.theme.primaryColor};
`;
