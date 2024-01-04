import React from "react";
import * as S from "./MenuItem.styles";

const MenuItem = ({ menu, handleAddMenu }) => {
  return (
    <S.WrapMenu>
        <S.MenuThumbnail />
        <S.MenuInfo>
          <S.IfBest>
            <S.MenuName>{menu.name}</S.MenuName>
            {menu.id === 1 && <S.MenuBest>BEST</S.MenuBest>}
          </S.IfBest>
          <S.AboutMenu>{menu.price}원</S.AboutMenu>
          <S.AboutMenu>{menu.ingredients}</S.AboutMenu>
        </S.MenuInfo>

        <S.PutButton onClick={handleAddMenu} type="button">
          담기
        </S.PutButton>
      </S.WrapMenu>
  );
};

export default MenuItem;
