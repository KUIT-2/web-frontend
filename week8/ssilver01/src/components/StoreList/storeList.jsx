import React from "react";
import * as S from "./storeList.styles";


const storeList = ({store}) => {
  return (
    <>
      <S.StoreList>
        <S.StoreImage />
        <S.div>
          <S.StoreMainLabel>{store.ranking}</S.StoreMainLabel>
          <S.StoreMainLabel>{store.name}</S.StoreMainLabel>
          <S.divSubLabel>
            <S.StyledStarIcon/>
            <S.SubLabel>{store.rate}</S.SubLabel>
            <S.SubLabel>({store.reviewCnt})</S.SubLabel>
          </S.divSubLabel>
          <S.divSubLabel>
            <S.SubLabel>{store.minDeliveryTime}분 ~ {store.maxDeliveryTime}분</S.SubLabel>
            <S.SubLabel>∙</S.SubLabel>
            <S.SubLabel>배달비 {store.deliveryFee}원</S.SubLabel>
          </S.divSubLabel>
        </S.div>
      </S.StoreList>
    </>
  );
};

export default storeList;
