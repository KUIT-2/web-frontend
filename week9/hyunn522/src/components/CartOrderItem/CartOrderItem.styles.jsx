import styled from "styled-components";


import { 
    MenuItemContainer, MenuItemDesc, MenuItemImg, MenuItemName, MenuItemPrice, MenuItemDetail, MenuItemAddBtn 
} from "../MenuItem/MenuItem.styles";

export const CartOrderItemContainer = styled(MenuItemContainer)``;
export const CartOrderItemImg = styled(MenuItemImg)``;
export const CartOrderItemDesc = styled(MenuItemDesc)``;
export const CartOrderItemName = styled(MenuItemName)``;
export const CartOrderItemDetail = styled(MenuItemPrice)``;
export const CartOrderItemPrice = styled(MenuItemDetail)``;
export const CartOrderItemCount = styled.div`
    display: flex;
    margin-left: auto;
`;
export const CartOrderItemLabel = styled(MenuItemPrice)`
    font-size: 15px;
    margin-right: 14px;
    margin-top: 0px;
`;
export const CartOrderItemIcon = styled.img`
`;