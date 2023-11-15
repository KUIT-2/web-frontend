import React from 'react'
import useCartStore from '../../store/cartStore';

import * as S from './MenuItem.styles';

const MenuItem = ({ menu }) => {
    const addMenu = useCartStore((state) => state.addMenu);
    

    const handleAddMenu = () => {
        addMenu(menu);
    };

    const bestMenu = menu.isBest;

    return (
        <S.MenuItemContainer>
            <S.MenuItemImg></S.MenuItemImg>
            <S.MenuItemDesc>
                <S.MenuItemHeader>
                    <S.MenuItemName>{menu.name}</S.MenuItemName>
                    {bestMenu ? <S.MenuItemBest>BEST</S.MenuItemBest> : ''}
                </S.MenuItemHeader>
                <S.MenuItemPrice>{menu.price}</S.MenuItemPrice>
                <S.MenuItemDetail>{menu.ingredients}</S.MenuItemDetail>
            </S.MenuItemDesc>
            <S.MenuItemAddBtn onClick={handleAddMenu} type="button">담기</S.MenuItemAddBtn>
        </S.MenuItemContainer>
    )
}

export default MenuItem