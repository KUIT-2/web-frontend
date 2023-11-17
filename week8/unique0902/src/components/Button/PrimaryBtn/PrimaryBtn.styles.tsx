import styled from 'styled-components';
import { color } from '../../../styles/Theme';

export const PrimaryButton = styled.button`
  border: none;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    color: ${color.primary_100};
  }
  color: white;
  background-color: ${color.primary_500};
  padding: 10px 16px;
  border-radius: 8px;
  border: none;
`;
