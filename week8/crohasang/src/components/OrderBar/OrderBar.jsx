import React from "react";
import useCartStore from "../../store/cartStore";
import { useNavigate, useParams } from "react-router-dom";
import * as S from "./OrderBar.styles";

const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);
  const navigate = useNavigate();


  const handleOrder = () => {
    
    navigate(`/cart`);
    
  };

  return (
    <S.Bottom>
      <S.BottomWriting>
        <S.TotalHangul>총 주문금액</S.TotalHangul>
        <S.TotalPrice>
          {menus.reduce((acc, currentMenu) => acc + currentMenu.price, 0)}원
        </S.TotalPrice>
      </S.BottomWriting>
      
      <S.OrderButton onClick={handleOrder} type="button">
        {/* {store?.name}에서 주문하기 */}
        주문하기
      </S.OrderButton>
    </S.Bottom>
  );
};

export default OrderBar;
