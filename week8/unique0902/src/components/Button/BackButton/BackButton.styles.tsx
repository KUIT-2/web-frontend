import styled from 'styled-components';
import { color } from '../../../styles/Theme';

export const BackBtn = styled.button`
  color: ${color.gray_900};
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.5rem;
  &:hover {
    color: ${color.gray_500};
  }
  margin-left: 10px;
  margin-top: 10px;
`;
