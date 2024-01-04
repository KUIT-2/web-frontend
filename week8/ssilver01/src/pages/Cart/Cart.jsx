import React, { useEffect, useState } from "react";

import BackBar from "../../components/BackBar/BackBar";
import AddMore from "../../components/Cart/AddMore/AddMore";
import CartStore from "../../components/Cart/CartStore/CartStore";

import useCartStore from "../../store/cartStore";
import * as S from "./Cart.styles";
import { getCart } from "../../api/cart";

const Cart = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);
  
  const countsArray = menus.reduce((acc, menu) => {
    const id = menu.id;
  
    if (!acc[id]) {
      acc[id] = 1;
    } else {
      acc[id]++;
    }
  
    return acc;
  }, {});


  const getcounts = (menuId) => {
    return countsArray[menuId] || 0;
  };

  //총 금액
  const totalPrice = menus.reduce(
    (acc, currentMenu) => acc + currentMenu.price,
    0
  );

  // {menus.reduce((acc, currentMenu) => acc +(currentMenu.price * counts[currentMenu.id]), 0)}

  const finish = () => {
    alert("결제 완료!!");
  };

  return (
    <S.div>
      <BackBar/>
      <S.bar />
      <CartStore menus ={menus} store = {store} totalPrice ={totalPrice} getcounts = {getcounts}/>
      <AddMore/>
      <S.bar />
      <S.bar_W />

      <S.PriceDiv>
        <S.PriceLabel>주문금액</S.PriceLabel>
        <S.Price>{totalPrice}원</S.Price>
      </S.PriceDiv>
      <S.PriceDiv>
        <S.PriceLabel>배달요금</S.PriceLabel>
        <S.Price>{store.deliveryFee}원</S.Price>
      </S.PriceDiv>

      <S.PriceDiv
        style={{
          margin: "9px 0",
        }}
      >
        <S.TotalPriceLabel>총 결제금액</S.TotalPriceLabel>

        <S.TotalPrice>{(totalPrice)+(store.deliveryFee)}원</S.TotalPrice>
      </S.PriceDiv>

      <S.minPrice>최소 주문금액 {store.minDeliveryPrice}원</S.minPrice>

      <S.payButton onClick={finish}>{(totalPrice)+(store.deliveryFee)}원 결제하기</S.payButton>
    </S.div>
  );
};

export default Cart;
