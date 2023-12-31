import React from "react";
import * as S from "./MenuItem.styles"
const MenuItem = ({ menu , handleAddMenu}) => {
  return (
    <S.MenuListComponent>
      <S.ImgContainer>
        <S.MenuImg />
      </S.ImgContainer>
      <S.MenuText>
        <S.MenuNameCtn>
        <S.MenuName>{menu.name}</S.MenuName>
        { menu.isBest ? <S.MenuBest>Best</S.MenuBest> : ' '}
        </S.MenuNameCtn>
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
