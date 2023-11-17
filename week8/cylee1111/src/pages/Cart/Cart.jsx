import React from "react";

import CartItem from "../../components/CartItem/CartItem";

import { PrevButton } from "../../assets";
import { useNavigate } from "react-router-dom";
import useCartStore from "../../store/cartStore";

const Cart = () => {  
  const navigate = useNavigate();
  const handlePrev = () => {
    navigate(-1);
  };

  const clearMenu = useCartStore((state) => state.clearMenu);
  const handleOrderCancel = () => {
    clearMenu();
    navigate(-1);
  };

  return (
    <div>
      <button type="button" onClick={handlePrev}><PrevButton /></button>
      <button type="button" onClick={handleOrderCancel}>주문취소</button>
      <CartItem />
    </div>
  );
};

export default Cart;
