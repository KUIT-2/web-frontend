import React,{useEffect} from "react";
import useCartStore from "../../store/cartStore";
import * as S from "./OrderBar.styles"
import { useNavigate } from "react-router-dom";

const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);

  const menuCount = useCartStore((state) => state.menuCount);


  const MenuTotalPrice = menus.reduce((acc, menus) => acc + menus.price * menuCount[menus.id], 0);

  const navigate = useNavigate();
  const handleOrder = (e) => {
    navigate("/cart");
  };

  return (
    <S.OrderBar>
      <S.OrderBarLeft>
        <div>총 주문금액</div>
        <S.Bold>
          {MenuTotalPrice}원
        </S.Bold>
      </S.OrderBarLeft>
      <S.OrderBarButton onClick={handleOrder} type="button">
        주문하기
      </S.OrderBarButton>
    </S.OrderBar>
  );
};
// "?." optional chaining 프로퍼티가 없을 때 안전하게 접근하도록
// store 가 있으면 접근 없으면 그냥 undefined로 비워두는 것
export default OrderBar;
