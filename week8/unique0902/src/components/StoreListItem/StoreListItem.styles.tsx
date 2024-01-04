import styled from 'styled-components';

export const StoreItemWrapper = styled.section`
  display: flex;
  flex-direction: row;
  padding: 16px 24px;
  gap: 12px;
  &:hover {
    opacity: 0.7;
  }
`;

export const StoreItemDescriptionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
