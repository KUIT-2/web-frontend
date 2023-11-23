import styled from "styled-components";

export const Bottom = styled.div`
    
    position: fixed;
    display: flex;
    flex-direction : row;
    width: 390px;
    height: 111px;
    bottom: 0;
    background: #FFFFFF;
    border-radius: 16px, 16px, 0px, 0px;
    justify-content: space-between;
    box-shadow: 0px -8px 16px 0px #0000001A;
    margin-left: 24px;

`

export const BottomWriting = styled.div`
    display: flex;
    flex-direction : column;
    text-align: center;
`;

export const TotalHangul = styled.div`
    position: absolute;
    top: 16px;
    left: 24px;
    font-family: Pretendard;
    font-size: 15px;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: left;
    color: #6B7684;

`;

export const TotalPrice = styled.div`
    position: absolute;
    top: 39px;
    left: 24px;
    font-family: Pretendard;
    font-size: 17px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;
    color: #4E5968;

`;


export const OrderButton = styled.button`
    position: absolute;    
    width: 84px;
    height: 38px;
    top: 20px;
    right: 24px;
    padding: 10px, 16px, 10px, 16px;
    border-radius: 8px;
    background: #3182F6;
    color : white;
    border: none;
    font-family: Pretendard;
    font-size: 15px;
    font-weight: 500;
    line-height: 18px;
    letter-spacing: 0px;
    text-align: center;

`;

