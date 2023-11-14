import React from "react";
import useCartStore from "../../store/cartStore";
import * as S from "./OrderBar.styles"

const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);

  const handleOrder = () => { };

  return (
    <S.OrderBar>
      <div>총 주문금액</div>
      <div>
        {menus.reduce((acc, currentMenu) => acc + currentMenu.price, 0)}원
      </div>
      <button onClick={handleOrder} type="button">
        {store?.name}에서 주문하기
      </button>
    </S.OrderBar>
  );
};
// "?." optional chaining 프로퍼티가 없을 때 안전하게 접근하도록
// store 가 있으면 접근 없으면 그냥 undefined로 비워두는 것
export default OrderBar;
