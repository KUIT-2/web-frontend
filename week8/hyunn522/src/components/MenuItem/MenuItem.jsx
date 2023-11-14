import React from 'react'
import useCartStore from '../../store/cartStore';

import * as S from './MenuItem.styles';

const MenuItem = ({ menu }) => {
    const addMenu = useCartStore((state) => state.addMenu);

    const handleAddMenu = () => {
        addMenu(menu);
    };

    return (
        <S.MenuItemContainer>
            <S.MenuItemImg></S.MenuItemImg>
            <S.MenuItemDesc>
                <S.MenuItemName>{menu.name}</S.MenuItemName>
                <S.MenuItemPrice>{menu.price}</S.MenuItemPrice>
                <S.MenuItemDetail>{menu.ingredients}</S.MenuItemDetail>
            </S.MenuItemDesc>
            <S.MenuItemAddBtn onClick={handleAddMenu} type="button">담기</S.MenuItemAddBtn>
        </S.MenuItemContainer>
    )
}

export default MenuItem