import React from 'react';
import styled from 'styled-components';
import { JustifyContentType } from '../../common/types/JustifyContentType';

const StyledRow = styled.span<{
  justifyContent?: JustifyContentType;
}>`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: ${(props) => props.justifyContent || 'flex-start'};
`;

interface ColumnPropsType {
  children: React.ReactNode;
  justifyContent?: JustifyContentType;
}

export default function Column({ children, ...props }: ColumnPropsType) {
  return <StyledRow {...props}>{children}</StyledRow>;
}
