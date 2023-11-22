import React from 'react'
import useCartStore from '../../store/cartStore';

import * as S from './MenuItem.styles';

const MenuItem = ({ menu }) => {
    const store = useCartStore((state) => state.store);
    const menus = useCartStore((state) => state.menus);

    const addCnt = useCartStore((state) => state.addCnt);
    const addMenu = useCartStore((state) => state.addMenu);
    const calTotalPrice = useCartStore((state) => state.calTotalPrice);
    const setStore = useCartStore((state) => state.setStore);

    const handleAddMenu = () => {
        setStore(store);
        // if(store === '없음') { console.log(store); setStore(store); }
        addMenu(menu);
        calTotalPrice(menu);
        // if (menus.map((eachmenu) => {
        //     if(eachmenu.name == menu.name) { return true; }
        // })) {
        //     addCnt(menu);
        // }
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