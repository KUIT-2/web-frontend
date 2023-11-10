import styled from "styled-components";

export const Form = styled.form`
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    gap: 10px;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 20px;
    border-top: 1px solid #eee;
`;

export const Button = styled.button`
    justify-content: center;
    width: 30%;
    margin: 0 auto;
    padding: 8px;
    cursor: pointer;
    border: 1px solid #000;
    border-radius: 10px;
    background: #000;
    color: #FFF;
`;