import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 8px;
  margin: 3px;
  border-radius: 12px;
  border: 1px solid black;
  background-color: transparent;
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
