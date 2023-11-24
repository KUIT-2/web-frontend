import React from "react";
import useCartStore from "../../store/cartStore";
import { useNavigate } from "react-router-dom";

import * as S from "./OrderBar.styles"

const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate(`/cart`);
  };

  return (
    <S.OrderBarContainer>
      <S.OrderAmountWrapper>
        <S.OrderAmountDesc>총 주문금액</S.OrderAmountDesc>
        <S.OrderAmountPrice>
          {menus.reduce((acc, currentMenu) => acc + currentMenu.price, 0)}원
        </S.OrderAmountPrice>        
      </S.OrderAmountWrapper>
      <S.OrderBtn onClick={handleOrder} type="button">
        {/* {store?.name}에서 주문하기 */}
        주문하기
      </S.OrderBtn>
    </S.OrderBarContainer>
  );
};

export default OrderBar;
