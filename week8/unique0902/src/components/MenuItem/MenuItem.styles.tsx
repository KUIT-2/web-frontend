import styled from 'styled-components';
import { color, flexRowStyle, fontSize, fontWeight } from '../../styles/Theme';

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
export const MenuItemPrimaryBtnText = styled.p`
  font-size: ${fontSize.xxs};
  font-weight: ${fontWeight.medium};
  color: ${color.white};
`;
