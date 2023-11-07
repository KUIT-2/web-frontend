import React from 'react'
import styled from 'styled-components'

const Input = ({ value, onChange, placeholder = "input something..." }) => {
    return (
        <StyledInput
            type={"text"}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
    )
}

const StyledInput = styled.input`
    padding: 8px;
    border-radius: 12px;
    border : 1px soild #eee;
`;

export default Input