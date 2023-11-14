import React from 'react'
import styled from 'styled-components';

import Star from '../../images/Star2.svg';

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

const StoreItem = () => {
  return (
    <Store>
        <StoreImage />
        <div>
            <Ranking>1위</Ranking>
            <StoreName>샐로리 한남점</StoreName>
            <Review>
                <ReviewStar src={Star} alt="star" />
                <ReviewPoint>4.9 (3,919)</ReviewPoint>
            </Review>
            <Delivery>13분~30분 ∙ 배달비 2,000원</Delivery>
        </div>
    </Store>
  )
}

export default StoreItem