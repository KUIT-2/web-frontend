import React from "react";
import { useNavigate } from "react-router-dom";

import * as S from "./Cart.styles"

import CartItem from "../../components/CartItem/CartItem";
import useCartStore from "../../store/cartStore";

import { PrevButton, StatusBar, HomeIndicator } from "../../assets";

const Cart = () => {  
  const store = useCartStore((state) => state.store);

  const navigate = useNavigate();
  const handlePrev = () => {
    navigate(-1);
  };

  const clearMenu = useCartStore((state) => state.clearMenu);
  const handleOrderCancel = () => {
    clearMenu(store);
    navigate(-1);
  };

  return (
    <S.Container>
      <S.Top>
        <StatusBar />
        <S.Prev type="button" onClick={handlePrev}><PrevButton /></S.Prev>
        <S.OrderCancelBtn type="button" onClick={handleOrderCancel}>주문취소</S.OrderCancelBtn>
      </S.Top>
      <S.CartItemsWrapper><CartItem /></S.CartItemsWrapper>
      <S.Bottom>
        <S.HomeIndicator><HomeIndicator /></S.HomeIndicator>     
      </S.Bottom>    
    </S.Container>

  );
};

export default Cart;
