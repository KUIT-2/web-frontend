import styled from "styled-components";
import { StoresCategory, StoresHeader } from './../Stores/Stores.styles';
import { StoreItemName } from "../../components/StoreItem/StoreItem.styles";

export const CartHeader = styled(StoresHeader)`
    display: flex;
    justify-content: space-between;
    padding-right: 15px;
`;

export const CartCancel = styled(StoreItemName)`
    margin-top: 0px;
`;

export const CartCategory = styled(StoresCategory)`
    padding-bottom: 12px;
`;

export const CartStore = styled.span`
    font-family: "Pretendard-Bold";
    font-size: 17px;
`;