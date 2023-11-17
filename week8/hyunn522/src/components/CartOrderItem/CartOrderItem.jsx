import React from 'react'

import useCartStore from '../../store/cartStore';

import * as S from './CartOrderItem.styles'

const CartOrderItem = ({ menu }) => {
    // const cnt = useCartStore((state) => state.cnt);

    // const addCnt = useCartStore((state) => state.addCnt);

  return (
    <S.MenuItemContainer>
        <S.MenuItemImg></S.MenuItemImg>
        <S.MenuItemDesc>
            <S.MenuItemName>{menu.name}</S.MenuItemName>
            <S.MenuItemPrice>{menu.ingredients}</S.MenuItemPrice>
            <S.MenuItemDetail>{menu.price}</S.MenuItemDetail>
        </S.MenuItemDesc>
        <S.MenuItemAddBtn>1개</S.MenuItemAddBtn>
    </S.MenuItemContainer>
)
}

export default CartOrderItem;