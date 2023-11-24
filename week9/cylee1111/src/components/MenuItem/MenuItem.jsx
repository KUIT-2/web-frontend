import React from "react";

import * as S from "./MenuItem.styles"

import useCartStore from "../../store/cartStore";

const MenuItem = ({ menu, handleAddMenu }) => {
  return (
    <S.MenuItemContainer>
      <S.MenuImage></S.MenuImage>
      <S.MenuDescWrapper>
        <S.MenuName>{menu.name}</S.MenuName>
        <S.MenuDesc>{menu.price}</S.MenuDesc>
        <S.MenuDesc>{menu.ingredients}</S.MenuDesc>        
      </S.MenuDescWrapper>
      <S.MenuAddBtn onClick={handleAddMenu} type="button">
        담기
      </S.MenuAddBtn>
    </S.MenuItemContainer>
  );
};

export default MenuItem;
