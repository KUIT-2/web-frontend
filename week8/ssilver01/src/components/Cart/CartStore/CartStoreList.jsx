import React from "react";
import * as S from "./CartStoreList.styles";

const CartStoreList = ({store, menus, getcounts}) => {

  const uniqueMenus = Array.from(new Set(menus.map(menu => menu.id)))
  .map(id => menus.find(menu => menu.id === id));


  return (
    <S.CartItems>
      {uniqueMenus.map((menu) => {
          return<div style={{ marginTop: "19px", display: "flex" }}><div
          style={{
            display: "flex",
            marginLeft: "16px",
            marginBottom: "26px",
            alignItems: "center",
          }}
        >
          <S.MenuImage />
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              marginLeft: "16px",
              marginRight: "20px",
              gap: "5px",
            }}
          >
            <S.MenuLabel>{menu.name}</S.MenuLabel>
            <S.Ingredients>{menu.ingredients}</S.Ingredients>
            <S.Price>{menu.price}원</S.Price>

          </div>
          
          <div style={{
            display:"flex",
            justifyContent:"center"
          }}>
            {/* 해당 메뉴 개수 반환 */}
            <S.Count>{getcounts(menu.id)}개</S.Count>
            <S.StyledArrowIcon />
          </div>
        </div>    </div>;
        })}
      </S.CartItems>

  );
};

export default CartStoreList;
