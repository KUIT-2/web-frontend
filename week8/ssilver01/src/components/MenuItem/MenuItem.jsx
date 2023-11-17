import React from "react";
import useCartStore from "../../store/cartStore";
import * as S from "./MenuItem.styles";

const MenuItem = ({ menu }) => {
  const addMenu = useCartStore((state) => state.addMenu);

  const handleAddMenu = () => {
    addMenu(menu);
  };

  return (
    <div
      style={{ display: "flex", padding: "16px 24px", alignItems: "center" }}
    >
      <S.MenuImage />
      <div style={{ paddingLeft: "16px", marginRight: "19px", gap: "5px" }}>
        <div>
          <S.MenuLabel>{menu.name}</S.MenuLabel>
          {menu.isBest && <S.best>BEST</S.best>}
        </div>
        <S.Price>{menu.price}원</S.Price>
        <S.Ingredients>{menu.ingredients}</S.Ingredients>
      </div>
      <S.button onClick={handleAddMenu} type="button">
        담기
      </S.button>
    </div>
  );
};

export default MenuItem;
