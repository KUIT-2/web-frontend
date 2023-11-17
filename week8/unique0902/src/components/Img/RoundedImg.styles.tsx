import styled from 'styled-components';
import { Rounded } from '../../store/type/style';

export const SRoundedImage = styled.img<{ $rounded: Rounded }>`
  width: 54px;
  height: 54px;
  background: #ececec;
  border-radius: ${(props) => {
    switch (props.$rounded) {
      case 'rounded-100':
        return '8px';
      case 'rounded-full':
        return '27px';
      default:
        throw Error('No Rounded Type Error!');
    }
  }};
`;
