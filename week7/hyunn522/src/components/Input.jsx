import React from "react";
import { styled } from 'styled-components';

const StyledInput = styled.input`
  padding: 8px;
  border-radius: 12px;
  border: 1px solid #eee;
`;

const Input = ({ value, onChange, placeholder = "input something" }) => {
  return (
    <StyledInput
      type={"text"}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

// const StyledInput = styled.Input.input("");
// const StyledInput2 = styled(StyleInput); //기존 스타일에 상속 (추가)


export default Input;