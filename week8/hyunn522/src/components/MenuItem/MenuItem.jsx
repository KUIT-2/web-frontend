/* eslint-disable array-callback-return */
import React from 'react';
import useCartStore from '../../store/cartStore';

import * as S from './MenuItem.styles';

const MenuItem = ({ menu }) => {
  const menus = useCartStore((state) => state.menus);
  const calTotalPrice = useCartStore((state) => state.calTotalPrice);

  const addMenu = useCartStore((state) => state.addMenu);

  const handleAddMenu = () => {
    // if(store === '없음') { console.log(store); setStore(store); }
    addMenu(menu);
    calTotalPrice(menu);
    menus.map((eachmenu) => {
      if (eachmenu.name === menu.name) {
        console.log(menu.name);
      }
    });
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
      <S.MenuItemAddBtn onClick={handleAddMenu} type="button">
        담기
      </S.MenuItemAddBtn>
    </S.MenuItemContainer>
  );
};

export default MenuItem;
