import React from 'react'

import * as S from "../StoreItem/StoreItem.styles";

const StoreItem = ({ store }) => {

    return (
        <S.StoreItemContainer>
            <S.StoreItemImg></S.StoreItemImg>
            <S.StoreItemDesc>
                <S.StoreItemRank>{store.ranking}위</S.StoreItemRank>
                <S.StoreItemName>{store.name}</S.StoreItemName>
                <S.StoreItemDetail>
                    <S.StoreStar>⭐</S.StoreStar>
                    <S.StoreItemDetail>{store.rate} ({store.reviewCnt})</S.StoreItemDetail>
                </S.StoreItemDetail>
                <S.StoreItemDetail>
                    {store.minDeliveryTime}-{store.maxDeliveryTime}분 · {store.deliveryFee}원
                </S.StoreItemDetail>
            </S.StoreItemDesc>
        </S.StoreItemContainer>
    )
}

export default StoreItem;