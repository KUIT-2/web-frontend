import styled from 'styled-components';
import { color } from '../../../styles/Theme';

type Props = {
  $isActivated: boolean;
  $isFull?: boolean;
};

export const PrimaryButton = styled.button<Props>`
  border: none;
  cursor: pointer;
  font-size: 1rem;
  &:hover {
    background-color: ${color.primary_100};
  }
  background-color: ${(props) =>
    props.$isActivated ? color.primary_500 : color.primary_100};
  color: white;
  padding: 10px 16px;
  ${(props) =>
    props.$isFull &&
    `
    width: 100%;
    border-radius: 16px;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
    padding-top: 18px;
    padding-bottom: 19px;
  `}
  border-radius: 8px;
  border: none;
`;
