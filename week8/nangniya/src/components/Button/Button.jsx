import styled from "styled-components";

const StyledButton = styled.button`
  background-color: #3182f6;
  border-radius: 12px;
  color: white;
  border: none;
  padding: 10px 15px;
`;

const Button = ({ children, onClick, type }) => {
  return (
    <StyledButton onClick={onClick} type={type}>
      {children}
    </StyledButton>
  );
};

export default Button;
