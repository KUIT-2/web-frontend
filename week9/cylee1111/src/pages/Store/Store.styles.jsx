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

export const Title = styled.div`
    padding-top: 114px;
    padding-left: 24px;
    font-weight: 700;
    font-size: 26px;
`;

export const ReviewSection = styled.div`
    padding: 7px 240px 12px 24px;
    display: flex;
    gap: 5px;
    font-size: 17px;
`;

export const ReviewStar = styled.span`
    color: #FFD158;
`;

export const ReviewRate = styled.span`
    color: #4E5968;
    font-weight: 600;
`;

export const ReviewCount = styled.span`
    color: #4E5968;
    font-weight: 500;
`;

export const StoreInfo = styled.div`
    padding-top: 9px;
    padding-left: 24px;
    display: flex;
    gap: 12px;
    color: #4E5968;
    font-size: 15px;
    font-weight: 500;
`;

export const MenuItemsWrapper = styled.div`
    margin-top: 14px;
    margin-bottom: 111px;
`;

export const Bottom = styled.div`
    width: 390px;
    height: 111px;
    position: fixed;
    top: 733px;
    left: 0px;
`;

export const HomeIndicator = styled.div`
    background-color: white;
`;