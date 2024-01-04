/* eslint-disable no-console */
/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';

import useCartStore from '../../store/cartStore';

import * as S from './CartOrderItem.styles';
import icon from '../../assets/img/icon-right-chevron.svg';

function CartOrderItem({ menu }) {
  const store = useCartStore((state) => state.store);
  const storeLink = `/store/${store.id}`;

  const cnt = useCartStore.getState().getCnt(menu.id);
  console.log(cnt);

  return (
    <S.CartOrderItemContainer>
      <S.CartOrderItemImg />
      <S.CartOrderItemDesc>
        <S.CartOrderItemName>{menu.name}</S.CartOrderItemName>
        <S.CartOrderItemDetail>--주문옵션--</S.CartOrderItemDetail>
        <S.CartOrderItemPrice>{menu.price}원</S.CartOrderItemPrice>
      </S.CartOrderItemDesc>
      <S.CartOrderItemCount>
        <S.CartOrderItemLabel>{cnt}개</S.CartOrderItemLabel>
        <Link to={storeLink}>
          <S.CartOrderItemIcon src={icon} />
        </Link>
      </S.CartOrderItemCount>
    </S.CartOrderItemContainer>
  );
}

export default CartOrderItem;
