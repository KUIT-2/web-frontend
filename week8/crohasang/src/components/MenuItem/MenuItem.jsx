import React from "react";
import { useParams } from "react-router-dom";
import useCartStore from "../../store/cartStore";
import stores from "../../models/stores";
import * as S from "./MenuItem.styles";

const MenuItem = ({ menu }) => {
  const addMenu = useCartStore((state) => state.addMenu);
  const setStore = useCartStore((state) => state.setStore);
  const { storeId } = useParams();
  const store = stores.find((s) => s.id.toString() === storeId);

  const HandleAddMenu = () => {
    addMenu(menu);
    setStore(store);
  };

  return (
    <>
      <S.WrapMenu>
          <S.MenuThumbnail />
          <S.MenuInfo>
            <S.MenuName>{menu.name}</S.MenuName>
          <S.AboutMenu>{menu.price}원</S.AboutMenu>
          <S.AboutMenu>{menu.ingredients}</S.AboutMenu>
          </S.MenuInfo>
        
        <S.PutButton onClick={HandleAddMenu} type="button">
          담기
        </S.PutButton>
      </S.WrapMenu>
    </>
  );
};

export default MenuItem;
