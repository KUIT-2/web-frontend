import styled from 'styled-components';
import { color } from '../../../styles/Theme';

export const BackBtn = styled.button`
  color: ${color.gray_900};
  &:hover {
    filter: opacity(0.5) drop-shadow(0 0 0 ${color.gray_500});
  }
  margin-left: 10px;
  margin-top: 10px;
`;
