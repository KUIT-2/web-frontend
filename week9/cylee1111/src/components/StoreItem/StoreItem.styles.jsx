import styled from "styled-components";

export const StoreItemContainer = styled.div`
    padding: 16px 24px;
    display: flex;
    gap: 16px;
    align-items: center;
`;

export const StoreImage = styled.div`
    width: 54px;
    height: 54px;
    background-color: #ECECEC;
    border-radius: 8px;
    min-width: 54px;
    min-height: 54px;
`;

export const StoreDescWrapper = styled.div`
    display: flex;
    gap: 5px;
    flex-direction: column;
`;

export const StoreName = styled.div`
    color: #333D4B;
    font-size: 17px;
    font-weight: 600;
`;

export const StoreDesc = styled.div`
    color: #6B7684;
    font-size: 13px;
    font-weight: 500;
`;