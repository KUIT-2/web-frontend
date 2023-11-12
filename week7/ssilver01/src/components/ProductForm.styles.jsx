import styled from "styled-components";

//아래 input_forms
export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 8px;
  background-color: #f7f7f7;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const button = styled.button`
  height: 50px;
  border-radius: 8px;
  border: none;
  background-color: #eee;

  &:hover {
    background-color:#f0e68c	;
    cursor: pointer;
  }
  
`;