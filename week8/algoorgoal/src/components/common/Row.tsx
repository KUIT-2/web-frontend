import React from 'react';
import styled from 'styled-components';
import { JustifyContentType } from '../../common/types/JustifyContentType';

const StyledRow = styled.span<{
  justifyContent?: JustifyContentType;
}>`
  display: flex;
  width: 100%;
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
`;

interface RowPropsType {
  children: React.ReactNode;
  justifyContent?: JustifyContentType;
}

export default function Row({ children, ...props }: RowPropsType) {
  return <StyledRow {...props}>{children}</StyledRow>;
}
