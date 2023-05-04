import React from 'react';
import styled from 'styled-components';

interface TextProps {
  fontWeight?: number;
  fontSize?: number;
  color?: string;
}

interface Props extends TextProps {
  children: React.ReactNode;
}

export default function CustomText({ fontWeight, fontSize, color, children }: Props) {
  return (
    <Text fontSize={fontSize} fontWeight={fontWeight} color={color}>
      {children}
    </Text>
  );
}

const Text = styled.span<TextProps>`
  font-size: ${(props) => props.fontSize || 14}px;
  font-weight: ${(props) => props.fontWeight || 400};
  color: ${(props) => props.color || 'black'};
`;
