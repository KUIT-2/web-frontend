import styled from 'styled-components';
import { flexRowStyle } from '../../styles/Theme';

export const MenuItemSec = styled.section`
  padding: 16px 24px;
  ${flexRowStyle}
  justify-content: space-between;
`;
export const MenuItemInformDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 400px;
  @media screen and (max-width: 500px) {
    width: 200px;
  }
`;
export const MenuItemNameSect = styled.section`
  ${flexRowStyle}
  @media screen and (max-width: 500px) {
    align-items: flex-start;
  }
  gap: 6px;
`;
