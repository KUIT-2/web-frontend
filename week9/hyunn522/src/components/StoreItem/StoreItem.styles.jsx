import styled from "styled-components";
import {
  MenuItemContainer,
  MenuItemDesc,
  MenuItemImg,
  MenuItemName,
  MenuItemPrice,
} from "../MenuItem/MenuItem.styles";

export const StoreItemContainer = styled(MenuItemContainer)``;

export const StoreItemImg = styled(MenuItemImg)`
  margin-top: 0px;
  border-radius: 8px;
`;

export const StoreItemDesc = styled(MenuItemDesc)`
  margin-left: 17px;
`;

export const StoreItemRank = styled(MenuItemName)``;

export const StoreItemName = styled(MenuItemName)`
  margin-top: 2px;
`;

export const StoreItemDetail = styled(MenuItemPrice)``;

export const StoreStar = styled.span`
  color: #6b7684;
  width: 13px;
  height: 13px;
  margin-right: 1.4px;
`;
