/* eslint-disable react/prop-types */
import React from 'react';

import * as S from './MenuItem.styles';

const MenuItem = ({ menu, handleAddMenu }) => {
  return (
    <S.MenuItemContainer>
      <S.MenuItemImg />
      <S.MenuItemDesc>
        <S.MenuItemHeader>
          <S.MenuItemName>{menu.name}</S.MenuItemName>
          {menu.isBest ? <S.MenuItemBest>BEST</S.MenuItemBest> : ''}
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
