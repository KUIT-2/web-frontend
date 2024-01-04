import styled from 'styled-components';
import { color } from '../../styles/Theme';

export const SRoundedImage = styled.img<{ $rounded: string }>`
  width: 54px;
  height: 54px;
  background: ${color.gray_200};
  border-radius: ${(props) => props.$rounded};
`;
