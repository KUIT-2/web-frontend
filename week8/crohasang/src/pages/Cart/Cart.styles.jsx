import styled from "styled-components";
import tempImage from "../../assets/arrow_back.svg";


export const WrapCart = styled.div`

width: 390px;

`;

export const CartTop = styled.div`
position: relative;
width: 390px;
height: 88px;
`;

export const BackArrow = styled.button`

    background-image: url(${tempImage});
    position: absolute;
    width: 24px;
    height: 24px;
    top: 10px;
    left: 10px;
    padding: 3px, 7.05px, 3.53px, 7px;
    border: none;
    background-color: #FFF;
`;

export const CancelOrder = styled.button`
position: absolute;
top: 10px;
right: 10px;
height: 19px;
font-family: Pretendard;
font-size: 16px;
font-weight: 600;
line-height: 19px;
letter-spacing: 0px;
text-align: left;
color: #333D4B;
border: none;
background-color: #FFF;

`;

export const OrderList = styled.div`
    border-top: 16px solid #F2F4F6;
    border-bottom: 16px solid #F2F4F6;
`;

export const OrderInfo = styled.div`
    display: flex;
    flex-direction: row;
`;

export const NameandReached = styled.span`
width: 100%;
display: flex;
flex-direction: row;
justify-content: space-between;

`

export const StoreName = styled.span`
position: relative;
margin-top: 26px;
margin-left: 24px;
font-family: Pretendard;
font-size: 17px;
font-weight: 700;
line-height: 20px;
letter-spacing: 0px;
text-align: left;
color: #6B7684;


`;

export const PricenotReached = styled.span`
position: relative;
margin-top: 26px;
margin-right: 24px;
font-family: Pretendard;
font-size: 15px;
font-weight: 500;
line-height: 18px;
letter-spacing: 0px;
text-align: right;
color: #F04452;

`;

export const MenuDiv = styled.div`
    margin-left:24px;
`;




export const CartMenuThumbnail = styled.div`
position: relative;
left: 4px;
width: 54px;
height: 54px;
border-radius: 8px;
background: #ECECEC;

`;



export const MenuCnt = styled.span`

margin-right: 20px;
font-family: Pretendard;
font-size: 15px;
font-weight: 500;
line-height: 15px;
letter-spacing: 0px;
text-align: center;
color: #6B7684;
white-space: nowrap;

`;

export const AddMore = styled.button`
width: 100%;
height: 59px;
padding: 19px, 0px, 20px, 0px;
background: white;
border-top: 1px solid #E5E8EB;
border-bottom: 0px transparent;
border-left: 0px transparent;
border-right: 0px transparent;
font-family: Pretendard;
font-size: 17px;
font-weight: 600;
line-height: 20px;
letter-spacing: 0px;
text-align: center;
color: #3182F6;


`;

export const PriceInfo = styled.div`
display: flex;
flex-direction : column;
margin-top: 20px;
margin-left: 24px;
margin-right: 24px;

`

export const PriceSentence = styled.div`
display: flex;
flex-direction : row;
justify-content: space-between;

font-family: Pretendard;
font-size: 17px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0px;
color: #505967;
margin-bottom: 10px;
`

export const TotalPriceSentence = styled.div`
margin-top: 10px;
display: flex;
flex-direction : row;
justify-content: space-between;

font-family: Pretendard;
font-size: 17px;
font-weight: 600;
line-height: 20px;
letter-spacing: 0px;
`;

export const CartBottom = styled.div`
width: 390px;
position: fixed;
display: flex;
flex-direction: column;
justify-content: center;

bottom: 0px;
`

export const ShowminDeliveryPrice = styled.div`
font-family: Pretendard;
font-size: 17px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0px;
text-align: center;
color: #6B7684;
`;

export const BuyButton = styled.button`
margin-top: 10px;
margin-bottom: 10px;
margin-left: 10px;
width: 370px;
height: 56px;
border-color: transparent;
padding: 18px, 112px, 19px, 113px;
border-radius: 16px;
background: #D0DFFB;
font-family: Pretendard;
font-size: 16px;
font-weight: 600;
line-height: 19px;
letter-spacing: 0px;
text-align: center;
color: #FFFFFF;
`;