import styled from "styled-components";

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  width: 50px;
  height: 50px;
  background-color: #f2f2f2;
  border: none;
  &:hover {
    background-color: #d9d9d9;
  }
`;

const Button = ({ children, onClick, type }) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
