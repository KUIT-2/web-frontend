import styled from "styled-components";
import { StoreRate } from "../../pages/Store/Store.styles";
import { MenuItemDetail, MenuItemAddBtn } from "../MenuItem/MenuItem.styles";

export const OrderContainer = styled.div`
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 77px;
    display: flex;
    justify-content: space-between;

    background: #FFF;
    border-radius: 16px 16px 0px 0px;
    box-shadow: 0px -8px 16px 0px rgba(0, 0, 0, 0.10);
`;

export const OrderNothing = styled(StoreRate)`
    display: flex;
    margin-left: 24px;
    align-items: center;
`;

export const OrderPrice = styled.div`
    display: flex;
    flex-direction: column;
`;

export const OrderText = styled(MenuItemDetail)`
    margin-top: 16px;
    margin-left: 24px;
    margin-bottom: 5px;
    font-size: 15px;
`
export const OrderTotalPrice = styled(StoreRate)`
    margin-left: 24px;
`;

export const OrderBtn = styled(MenuItemAddBtn)`
    margin-top: 19px;
    margin-right: 24px;
    padding: 10px 16px;
    width: 84px;
    height: 38px;
`;