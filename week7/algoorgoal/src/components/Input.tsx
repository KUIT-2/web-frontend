import React from 'react';
import styled from 'styled-components';

interface InputPropsType {
  value: string | number;
  onValueChange: React.ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

const StyledInput = styled.input`
  padding: 8px;
  border-radius: 12px;
  border: 1px solid #eee;
`;

export default function Input({
  value,
  onValueChange,
  placeholder = 'type something...',
}: InputPropsType) {
  return (
    <StyledInput
      type='text'
      value={value}
      placeholder={placeholder}
      onChange={onValueChange}
    />
  );
}
