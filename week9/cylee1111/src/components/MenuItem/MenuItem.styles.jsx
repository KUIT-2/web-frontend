import styled from "styled-components";

export const MenuItemContainer = styled.div`
    padding: 16px 24px;
    display: flex;
    gap: 16px;
    align-items: center;
`;

export const MenuImage = styled.div`
    width: 54px;
    height: 54px;
    background-color: #ECECEC;
    border-radius: 27px;
    min-width: 54px;
    min-height: 54px;
`;

export const MenuDescWrapper = styled.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
`;

export const MenuName = styled.div`
    color: #333D4B;
    font-size: 17px;
    font-weight: 600;
`;

export const MenuDesc = styled.div`
    color: #6B7684;
    font-size: 13px;
    font-weight: 500;
`;

export const MenuAddBtn = styled.button`
    width: 52px;
    height: 32px;
    min-width: 52px;
    min-height: 32px;
    color: white;
    font-size: 13px;
    font-weight: 500;
    background-color: #3182F6;
    border: none;
    border-radius: 8px;
`;