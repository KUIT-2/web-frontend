import React from "react";
import { Link } from "react-router-dom";
import useCartStore from "../../store/cartStore";
import * as S from "./OrderBar.styles";

const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);

  const handleOrder = () => {
    if (!store) {
      alert("주문을 처리할 수 없습니다. 스토어가 없습니다.");
    // 페이지 reload
    window.location.reload();
    }
  };

  return (
    <S.div>
      <S.divSub>
        <div>
          <S.TotalPrice>총 주문금액</S.TotalPrice>
          <S.Price>
            {menus.reduce((acc, currentMenu) => acc +currentMenu.price, 0)}원
          </S.Price>
        </div>
        <Link to="/Cart">
        <S.button onClick={handleOrder} type="button">
          {/* {store?.name}에서  */}주문하기
        </S.button>
        </Link>

      </S.divSub>
    </S.div>
  );
};

export default OrderBar;
