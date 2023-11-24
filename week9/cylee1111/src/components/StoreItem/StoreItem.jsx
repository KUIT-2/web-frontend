import React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./StoreItem.styles"

const StoreItem = ({ store }) => {
  const navigate = useNavigate();

  const handleMoveToStore = () => {
    navigate(`/store/${store.id}`);
  };

  return(
    <S.StoreItemContainer onClick={handleMoveToStore}>
      <S.StoreImage></S.StoreImage>
      <S.StoreDescWrapper>
        <S.StoreName>{store.name}</S.StoreName>
        <S.StoreDesc>
          ★ {store.rate} {'('}{store.reviewCnt}{')'}
        </S.StoreDesc>
        <S.StoreDesc>
          {store.minDeliveryTime}분~{store.maxDeliveryTime}분 • 배달비 {store.minDeliveryPrice}원
        </S.StoreDesc>        
      </S.StoreDescWrapper>
    </S.StoreItemContainer>
  )
};

export default StoreItem;