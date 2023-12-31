import styled from "styled-components";

const detailStyle = styled.span`
    color: #6B7684;
    font-family: "Pretendard-Medium";
    font-size: 13px;
    line-height: normal;
    margin-top: 5px;
`;

export const MenuItemContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 16px 24px;
    
`;

export const MenuItemImg = styled.img`
    width: 54px;
    height: 54px;
    border-radius: 27px;
    background: #eee;
`;

export const MenuItemDesc = styled.div`
    margin-left: 16px;
    display: flex;
    flex-direction: column;
`;

export const MenuItemHeader = styled.div``;

export const MenuItemName = styled.span`
    color: #333D4B;
    font-family: "Pretendard-SemiBold";
    font-size: 17px;
`;

export const MenuItemBest = styled.span`
    margin-left: 6px;
    color: #3182F6;
    font-family: "Pretendard-SemiBold";
    font-size: 17px;
`;

export const MenuItemPrice = styled(detailStyle)``;

export const MenuItemDetail = styled(detailStyle)`
    width: 201px;
`;

export const MenuItemAddBtn = styled.button`
    margin-left: 19px;
    width: 52px;
    height: 32px;
    
    border-radius: 8px;
    background: #3182F6;
    border-style: none;
    display: inline-flex;
    justify-content: center;
    align-items: center;

    color: #FFF;
    text-align: center;
    font-family: "Pretendard-Medium";
    font-size: 13px;
`;