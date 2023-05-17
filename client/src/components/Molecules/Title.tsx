import React from 'react';
import styled from 'styled-components';
import Text from 'components/Atoms/Text';
import Link from 'components/Atoms/Link';

function Title() {
  return (
    <TitleBg>
      <Link href="/">
        <Text fontWeight={600} fontSize={20} color="white">
          H-Log
        </Text>
      </Link>
    </TitleBg>
  );
}

export default Title;

const TitleBg = styled.div`
  width: 70%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
