import React from "react";
import * as S from "./CartStoreList.styles";

const CartStoreList = ({store, menus, counts}) => {
  return (
    <S.CartItems>
      {menus.map((menu) => {
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
            <S.Count>{menu.counts}개</S.Count>
            <S.StyledArrowIcon />
          </div>
        </div>    </div>;
        })}
      </S.CartItems>

  );
};

export default CartStoreList;
