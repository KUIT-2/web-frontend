import styled from 'styled-components';
import { color, fontSize, fontWeight } from '../../styles/Theme';

export const CategoryItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 108px;
  height: 74px;
  gap: 4px;
  background-color: ${color.category_item_color};
`;
export const CategoryName = styled.li`
  font-size: ${fontSize.xcs};
  font-weight: ${fontWeight.semiBold};
  text-align: center;
`;
