import React from 'react'
import styled from 'styled-components';

import Star from '../../images/Star2.svg';

import { useNavigate } from 'react-router-dom';

const StoreImage = styled.div`
    width: 54px;
    height: 54px;
    border-radius: 8px;
    background: #ECECEC;
    margin: 16px 17px 46px 24px;
`;

const Store = styled.div`
    display: flex;
`;

const Ranking = styled.div`
    color: #333D4B;
    font-family: Pretendard-SemiBold;
    font-size: 17px;
    line-height: normal;
    margin: 16px 272px 2px 0px;
`;

const StoreName = styled.div`
    color: #333D4B;
    font-family: Pretendard-SemiBold;
    font-size: 17px;
    line-height: normal;
    margin-bottom: 5px;
`;

const Review = styled.div`
    display: flex;
    align-items : center;
    margin-bottom: 4px;
`;

const ReviewStar = styled.img`
    width: 13.161px;
    height: 13.161px;
`;

const ReviewPoint = styled.div`
    color: #6B7684;
    font-family: Pretendard-Medium;
    font-size: 13px;
    line-height: normal;
    margin-left: 1px;
`;

const Delivery = styled.div`
    color: #6B7684;
    font-family: Pretendard-Medium;
    font-size: 13px;
    line-height: normal;
`;

const StoreItem = ({ store }) => {
    const navigate = useNavigate();

    const handleEnterStore = () => {
        navigate(`/store/${store.id}`);
    };

    return (
        <Store onClick={handleEnterStore} type="button">
            <StoreImage />
            <div>
                <Ranking>{store.ranking}</Ranking>
                <StoreName>{store.name}</StoreName>
                <Review>
                    <ReviewStar src={Star} alt="star" />
                    <ReviewPoint>{store.rate} ({store.reviewCnt})</ReviewPoint>
                </Review>
                <Delivery>{store.minDeliveryTime}~{store.maxDeliveryTime} ∙ 배달비 {store.deliveryFee}원</Delivery>
            </div>
        </Store>
    )
}

export default StoreItem