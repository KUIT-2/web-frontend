import React from "react";
import useCartStore from "../../store/cartStore";
import * as S from "./MenuItem.styles"
const MenuItem = ({ menu }) => {
  const addMenu = useCartStore((state) => state.addMenu);

  const handleAddMenu = () => {
    addMenu(menu);
  };

  return (
    <S.MenuListComponent>
      <S.MenuImg />
      <S.MenuText>
        <S.MenuName>{menu.name}</S.MenuName>
        <S.MenuPrice>{menu.price}원</S.MenuPrice>
        <S.MenuIngr>{menu.ingredients}</S.MenuIngr>
      </S.MenuText>
      <S.MenuButton onClick={handleAddMenu} type="button">
        담기
      </S.MenuButton>
    </S.MenuListComponent>
  );
};

export default MenuItem;
