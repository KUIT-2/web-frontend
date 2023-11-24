import styled from "styled-components";

export const Cart = styled.div`
    position: relative;
    border-top: 16px solid #F2F4F6;
    border-bottom: 16px solid #F2F4F6;
`;

export const StoreName = styled.div`
    padding-top: 26px;
    padding-left: 24px;
    color: #6B7684;
    font-size: 17px;
    font-family: Pretendard;
    font-weight: 700;
`;

export const CartItemContainer = styled.div`
    padding: 16px 24px;
    display: flex;
    gap: 16px;
    align-items: center;
`;

export const CartImage = styled.div`
    width: 54px;
    height: 54px;
    background-color: #ECECEC;
    border-radius: 27px;
    min-width: 54px;
    min-height: 54px;
`;

export const CartDescWrapper = styled.div`
    width: 210px;
    min-width: 210px;
    display: flex;
    gap: 5px;
    flex-direction: column;
`;

export const CartName = styled.div`
    color: #333D4B;
    font-size: 17px;
    font-weight: 600;
`;

export const CartDesc = styled.div`
    color: #6B7684;
    font-size: 13px;
    font-weight: 500;
`;

export const AddMoreBtn = styled.button`
    width: 390px;
    height: 60px;
    color: #3182F6;
    font-size: 17px;
    font-weight: 600;
    background-color: transparent;
    border: none;
    border-top: 1px solid #E5E8EB;
`;

export const CartResultWrapper = styled.div`
    border-top: 16px solid white;
    border-bottom: 16px solid white;
    margin-bottom: 129px;
`;

export const ResultDesc = styled.span`
    color: #8B95A1;
    font-size: 17px;
    font-weight: 500;
`;

export const ResultPrice = styled.span`
    color: #505967;
    font-size: 17px;
    font-weight: 500;
`;

export const Total = styled.span`
    color: #4E5968;
    font-size: 17px;
    font-weight: 600;
`;

export const ResultWrapper = styled.div`
    height: 38px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TotalWrapper = styled.div`
    height: 54px;
    padding: 0 24px;
    display: flex;
    align-items: center;
    justify-content: space-between;

`;

export const PaymentBtn = styled.button`
    width: 350px;
    height: 56px;    
    position: fixed;
    top: 754px;
    left: 20px;
    border-radius: 16px;
    background-color: #D0DFFB;
    color: white;
    font-size: 16px;
    font-weight: 600;
    border: none;
`;

export const PaymentBtnActive = styled(PaymentBtn)`
    background-color: #3182F6;
`;

export const Notice = styled.p`
    padding-left: 24px;
    font-size: 17px;
    font-weight: 600;
`;

export const LessThanMin = styled.span`
    width: 100px;
    height: 18px;
    position: absolute;
    top: 26px;
    right: 24px;
    color: #F04452;
    font-size: 15px;
    font-family: Pretendard;
    font-weight: 500;
    line-height: 18px;
    display: flex;
`;

export const Alert = styled.span`
    display: flex;
    align-items: center;
    padding-left: 2px;
`;