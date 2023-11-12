import styled from "styled-components";

export const Form = styled.form`
  background-color: white;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 10px;
  ${({ isEditing }) =>
    !isEditing &&
    `
    width: 100%;
    position: fixed;
    bottom: 0;
    left:0;
    border-top: 1px solid #eee;
  `}
  padding: 20px;
`;

export const Button = styled.button`
  border: 1px solid #eee;
  border-radius: 10px;
  height: 30px;
  background-color: skyblue;
  &:hover {
    background-color: deepskyblue;
  }
`;
