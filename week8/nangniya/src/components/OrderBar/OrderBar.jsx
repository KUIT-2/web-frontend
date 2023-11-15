import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./OrderBar.styles";
import useCartStore from "../../store/cartStore";
import Button from "../Button/Button";

const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);
  const navigate = useNavigate();

  const handleOrder = () => {
    navigate("/cart");
  };

  return (
    <S.OrderBox>
      <S.OrderInfo>
        <p>총 주문금액</p>
        <p className="price">
          {menus
            .reduce((acc, currentMenu) => acc + currentMenu.price, 0)
            .toLocaleString()}
          원
        </p>
      </S.OrderInfo>
      <div>
        <Button onClick={handleOrder} type="button">
          {store?.name}에서 주문하기
        </Button>
      </div>
    </S.OrderBox>
  );
};

export default OrderBar;
