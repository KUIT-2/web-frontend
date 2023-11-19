import React from "react";
import styled from "styled-components";

// input style
const StyledInput = styled.input`
  padding: 8px;
  border-radius: 12px;
  border: 1px solid #gray;
`;

const Input = ({ value, onChange, placeholder = "input something..." }) => {
  return (
    <StyledInput
      type={"text"}
      value={value}
      placeholder={placeholder}
      onChange={onChange}
    />
  );
};

export default Input;
