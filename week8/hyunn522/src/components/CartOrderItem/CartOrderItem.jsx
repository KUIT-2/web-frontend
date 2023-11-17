import React from 'react'
import { Link } from 'react-router-dom';

import useCartStore from '../../store/cartStore';

import * as S from './CartOrderItem.styles'
import icon from '../../img/icon-right-chevron.svg';

const CartOrderItem = ({ menu }) => {
    const store = useCartStore((state) => state.store);
    const storeLink = '/store/' + store.id
    // const cnt = useCartStore((state) => state.cnt);

    // const addCnt = useCartStore((state) => state.addCnt);

  return (
    <S.CartOrderItemContainer>
        <S.CartOrderItemImg></S.CartOrderItemImg>
        <S.CartOrderItemDesc>
            <S.CartOrderItemName>{menu.name}</S.CartOrderItemName>
            <S.CartOrderItemDetail>--주문옵션--</S.CartOrderItemDetail>
            <S.CartOrderItemPrice>{menu.price}원</S.CartOrderItemPrice>
        </S.CartOrderItemDesc>
        <S.CartOrderItemCount>
            <S.CartOrderItemLabel>1개</S.CartOrderItemLabel>
            <Link to={storeLink}>
                <S.CartOrderItemIcon src={icon}></S.CartOrderItemIcon>
            </Link>
        </S.CartOrderItemCount>
    </S.CartOrderItemContainer>
)
}

export default CartOrderItem;