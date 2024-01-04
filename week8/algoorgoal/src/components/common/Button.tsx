import React from 'react';
import styled from 'styled-components';
import { ColorType, SizeType, ThemeType } from '../../common/styles/theme';

const StyledButton = styled.button<{
  theme: ThemeType;
  width: string;
  height: string;
}>`
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color.primary};
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
  border-width: 0;
  border-radius: 8px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

interface ButtonPropTypes {
  type?: 'button' | 'submit' | 'reset';
  children: React.ReactNode;
  width?: string;
  height?: string;
  onClick: () => void;
}

export default function Button({
  children,
  type = 'button',
  width = 'auto',
  height = 'auto',
  ...props
}: ButtonPropTypes) {
  return (
    <StyledButton type={type} width={width} height={height} {...props}>
      {children}
    </StyledButton>
  );
}
