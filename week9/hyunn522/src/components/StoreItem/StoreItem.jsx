/* eslint-disable react/prop-types */
import React from 'react';

import { Link } from 'react-router-dom';
import * as S from './StoreItem.styles';

const StoreItem = ({ store }) => {
  const link = `/store/${store.id}`;

  return (
    <Link to={link} style={{ textDecoration: 'none' }}>
      <S.StoreItemContainer>
        <S.StoreItemImg />
        <S.StoreItemDesc>
          <S.StoreItemRank>{store.ranking}위</S.StoreItemRank>
          <S.StoreItemName>{store.name}</S.StoreItemName>
          <S.StoreItemDetail>
            <S.StoreStar>⭐</S.StoreStar>
            <S.StoreItemDetail>
              {store.rate} ({store.reviewCnt})
            </S.StoreItemDetail>
          </S.StoreItemDetail>
          <S.StoreItemDetail>
            {store.minDeliveryTime}-{store.maxDeliveryTime}분 · {store.deliveryFee}원
          </S.StoreItemDetail>
        </S.StoreItemDesc>
      </S.StoreItemContainer>
    </Link>
  );
};

export default StoreItem;
