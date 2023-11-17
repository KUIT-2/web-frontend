import React from "react";
import { useNavigate} from "react-router-dom";

import BackBar from "../../components/BackBar/BackBar";
import AddMore from "../../components/Cart/AddMore/AddMore";
import CartStore from "../../components/Cart/CartStore/CartStore";

import useCartStore from "../../store/cartStore";
import * as S from "./Cart.styles";

const Cart = () => {
  const navigate = useNavigate();

  const cancelMenu = useCartStore((state) => state.cancelMenus);
  const cancelStore = useCartStore((state) => state.cancelStore);

  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);
  const counts = useCartStore((state) => state.counts);

  const finish = () => {
    alert("결제 완료!!");
  };

  return (
    <S.div>
      <BackBar/>
      <S.bar />
      <CartStore menus ={menus} store = {store} counts={counts} />
      <AddMore />
      <S.bar />
      <S.bar_W />

      <S.PriceDiv>
        <S.PriceLabel>주문금액</S.PriceLabel>
        <S.Price>{menus.reduce((acc, currentMenu) => acc +(currentMenu.price * counts[currentMenu.id]), 0)}원</S.Price>
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
        <S.TotalPrice>{menus.reduce((acc, currentMenu) => acc +(currentMenu.price * counts[currentMenu.id]), 0)+(store.deliveryFee)}원</S.TotalPrice>
      </S.PriceDiv>

      <S.minPrice>최소 주문금액 {store.minDeliveryPrice}원</S.minPrice>
      <S.payButton onClick={finish}>{menus.reduce((acc, currentMenu) => acc +(currentMenu.price * counts[currentMenu.id]), 0)+(store.deliveryFee)}원 결제하기</S.payButton>
    </S.div>
  );
};

export default Cart;
