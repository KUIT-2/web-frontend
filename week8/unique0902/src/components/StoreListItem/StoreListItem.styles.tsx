import styled from 'styled-components';

export const BackBtn = styled.button`
  color: #191f28;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  &:hover {
    color: #8b939e;
  }
  margin-left: 10px;
  margin-top: 10px;
`;

export const StoreItemWrapper = styled.section`
  display: flex;
  flex-direction: row;
  padding: 16px 24px;
  gap: 12px;
`;

export const StoreItemDescriptionWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;
