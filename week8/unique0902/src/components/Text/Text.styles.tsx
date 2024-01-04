import styled from 'styled-components';

type Props = {
  $fontSize: string;
  $fontWeight: string;
  $textColor: string;
};

export const SText = styled.p<Props>`
  font-size: ${(props) => props.$fontSize};
  font-weight: ${(props) => props.$fontWeight};
  color: ${(props) => props.$textColor};
`;
