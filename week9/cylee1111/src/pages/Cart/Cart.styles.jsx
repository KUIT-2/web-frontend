import styled from "styled-components";

export const Container = styled.div`
    width: 390px;
    height: 844px;
    font-family: Pretendard;
    overflow: auto;
`;

export const Top = styled.div`
    width: 390px;
    height: 90px;
    position: fixed;
    background-color: white;
    z-index: 1;
`;

export const Prev = styled.button`
    width: 24px;
    height: 24px;
    position: absolute;
    bottom: 10px;
    left: 10px;
    background-color: transparent;
    border: none;
`;

export const OrderCancelBtn = styled.button`
    position: absolute;
    bottom: 13px;
    right: 15px;
    background-color: transparent;
    border: none;
    color: #333D4B;
    font-size: 16px;
    font-weight: 600;
`;

export const CartItemsWrapper = styled.div`
    margin-top: 88px;
`;

export const Bottom = styled.div`
    width: 390px;
    height: 111px;
    position: fixed;
    top: 810px;
    left: 0px;
`;

export const HomeIndicator = styled.div`
    background-color: white;
`;