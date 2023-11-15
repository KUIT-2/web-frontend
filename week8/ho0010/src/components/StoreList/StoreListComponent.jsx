import React from 'react'
import * as S from "./StoreListComponent.styles"
const StoreListComponent = ({ store }) => {
    return (
        <S.StoreListComponent>
            <S.StoreImg />
            <S.ComponentText>
                <S.TextId>{store.id}위</S.TextId>
                <S.TextId>{store.name}</S.TextId>
                <S.TextRate>⭐({store.rate}) {store.reviewCnt}</S.TextRate>
                <S.TextRate>{store.minDeliveryTime}분~{store.maxDeliveryTime}분 ∙ 배달비 {store.deliveryFee}원</S.TextRate>
            </S.ComponentText>
        </S.StoreListComponent>
    )
}

export default StoreListComponent
