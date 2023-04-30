import React from 'react';
import styled from 'styled-components';

interface TextProps {
  fontWeight?: number;
  fontSize?: number;
}

interface Props extends TextProps {
  children: React.ReactNode;
}

export default function CustomText({ fontWeight, fontSize, children }: Props) {
  return (
    <Text fontSize={fontSize} fontWeight={fontWeight}>
      {children}
    </Text>
  );
}

const Text = styled.span<TextProps>`
  font-size: ${(props) => props.fontSize || 14};
  font-weight: ${(props) => props.fontWeight || 400};
`;
