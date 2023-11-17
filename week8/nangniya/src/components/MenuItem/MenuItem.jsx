import React from "react";
import useCartStore from "../../store/cartStore";
import * as S from "./MenuItem.styles";
import Button from "../Button/Button";

const MenuItem = ({ store, menu }) => {
  const storeInCart = useCartStore((state) => state.store);
  const addMenu = useCartStore((state) => state.addMenu);
  const setStore = useCartStore((state) => state.setStore);

  const handleAddMenu = () => {
    if (storeInCart === store) {
      addMenu(menu);
    } else if (storeInCart === undefined) {
      setStore(store);
      addMenu(menu);
    } else {
      console.log("한 가게에서만 주문할 수 있습니다.");
    }
  };

  return (
    <S.Wrapper>
      <S.MenuImage />

      <S.MenuBox>
        <S.MenuName>
          <h3>{menu.name}</h3>
          {menu.isBest ? <h3 className="best">BEST</h3> : null}
        </S.MenuName>
        <p>{menu.price.toLocaleString()}원</p>
        <p>{menu.ingredients}</p>
      </S.MenuBox>
      <S.ButtonWrapper>
        <Button onClick={handleAddMenu} type="button">
          담기
        </Button>
      </S.ButtonWrapper>
    </S.Wrapper>
  );
};

export default MenuItem;
