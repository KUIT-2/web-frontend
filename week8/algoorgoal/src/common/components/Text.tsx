import React from 'react';
import styled from 'styled-components';
import { ColorType, SizeType, ThemeType } from '../styles/theme';

const StyledText = styled.span<{
  color: ColorType;
  size: SizeType;
  theme: ThemeType;
}>`
  color: ${(props) => props.theme.color[props.color]};
  font-size: ${(props) => props.theme.size[props.size]};
`;

interface TextPropsType {
  color: ColorType;
  size: SizeType;
  children: React.ReactNode;
  as?: string;
}

export default function Text({ children, ...props }: TextPropsType) {
  return <StyledText {...props}>{children}</StyledText>;
}
