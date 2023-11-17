import React from 'react';
import styled from 'styled-components';
import { ColorType, SizeType, ThemeType } from '../styles/theme';

const StyledButton = styled.button<{
  color: ColorType;
  theme: ThemeType;
  width: string;
  height: string;
}>`
  color: white;
  background-color: ${(props) => props.theme.color.primary};
  font-weight: 500;
  &:hover {
    cursor: pointer;
  }
  border: 0;
  border-radius: 8px;
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

interface ButtonPropTypes {
  type?: 'button' | 'submit' | 'reset';
  color: ColorType;
  children: React.ReactNode;
  width: string;
  height: string;
  onClick: () => void;
}

export default function Button({
  children,
  type = 'button',
  ...props
}: ButtonPropTypes) {
  return (
    <StyledButton {...props} type={type}>
      {children}
    </StyledButton>
  );
}
