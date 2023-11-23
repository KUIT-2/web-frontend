import styled from "styled-components";
import tempImage from "../../assets/arrow_back.svg";


export const WrapStores = styled.div`
    width: 390px;
    height: 100%;
`

export const StoresTop = styled.div`
width: 100%;
height: 88px;
`

export const BackArrow = styled.button`

    background-image: url(${tempImage});
    position: fixed;
    width: 24px;
    height: 24px;
    top: 10px;
    left: 10px;
    padding: 3px, 7.05px, 3.53px, 7px;
    border: none;
    background-color: #fff;
    
`;

export const FoodType = styled.div`


position: relative;
height: 31px;
top: 50px;
left: 24px;

color: #191F28;

font-family: Pretendard;
font-size: 26px;
font-weight: 700;
line-height: 31px;
letter-spacing: 0px;
text-align: left;

`;

export const StoresList = styled.div`

position: relative;
width: 390px;
top: 50px;
`;

export const StoreButton = styled.button`
display: flex;
flex-direction: row;

width: 100%;
height: 116px;
background: white;
border : none;
`;

export const StorePic = styled.div`
position: relative;
width: 54px;
height: 54px;
top: 16px;
left: 24px;
border-radius: 8px;
background: #ECECEC;

`;

export const StoreInfoList = styled.div`
display: flex;
flex-direction: column;
margin-left: 40px;
`

export const StoreInfo1 = styled.div`

    font-family: Pretendard;
    font-size: 17px;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: left;

`;

export const StoreInfo2 = styled.div`

    font-family: Pretendard;
    font-size: 13px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0px;
    color: #6B7684;
    text-align: left;
`;


