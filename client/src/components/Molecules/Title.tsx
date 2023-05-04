import React from 'react';
import styled from 'styled-components';
import CustomText from 'components/Atoms/CustomText';
import CustomLink from 'components/Atoms/CustomLink';

function Title() {
  return (
    <TitleBg>
      <CustomLink href="/">
        <CustomText fontWeight={600} fontSize={20} color="white">
          H-Log
        </CustomText>
      </CustomLink>
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
