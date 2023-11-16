import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => (props.isForbidden ? "#d0dffb" : "#3182f6")};
  border-radius: 12px;
  color: white;
  border: none;
  padding: 10px 15px;
`;

const Button = ({ children, onClick, type, isForbidden }) => {
  return (
    <StyledButton onClick={onClick} type={type} isForbidden={isForbidden}>
      {children}
    </StyledButton>
  );
};

export default Button;
