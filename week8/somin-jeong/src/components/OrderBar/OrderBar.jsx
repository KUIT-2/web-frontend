import React, { useEffect }  from "react";
import useCartStore from "../../store/cartStore";
import styled from 'styled-components';

import { useNavigate } from 'react-router-dom';

const OrderBottomBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 390px;
  height: 77px;
  flex-shrink: 0;
  box-sizing: border-box;
  display: flex;
  justify-content : space-between;
  border-radius: 16px 16px 0px 0px;
  background: #FFF;
  box-shadow: 0px -8px 16px 0px rgba(0, 0, 0, 0.10);
`;

const TotalOrder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin: 16px 0px 18px 24px;
`;

const TotalOrderPriceText = styled.div`
  color: #6B7684;
  font-family: Pretendard-Medium;
  font-size: 15px;
  line-height: normal;
`;

const TotalOrderPrice = styled.div`
  color: #4E5968;
  font-family: Pretendard-SemiBold;
  font-size: 17px;
  line-height: normal;
`;

const Button = styled.div`
  display: inline-flex;
  padding: 10px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: #3182F6;
  color: #FFF;
  text-align: center;
  font-family: Pretendard-Medium;
  font-size: 15px;
  line-height: normal;
  width: 52px;
  height: 18px;
  margin: 19px 24px 20px 0px;
  box-sizing: content-box;
`;

const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);
  const menuCounts = useCartStore((state) => state.menuCounts);

  const navigate = useNavigate();

  const handleOrder = () => {
    navigate(`/cart`);
  };

  let totalPrice = 0;

  console.log(menus);
  totalPrice = menus.reduce((acc, currentMenu) => acc + (currentMenu.price * currentMenu.counts), 0);
  console.log(totalPrice);
  console.log(menuCounts);

  return (
    <OrderBottomBar>
      <TotalOrder>
        <TotalOrderPriceText>총 주문금액</TotalOrderPriceText>
        <TotalOrderPrice>
          {totalPrice}원
        </TotalOrderPrice>
      </TotalOrder>
      <Button onClick={handleOrder} type="button">
        주문하기
      </Button>
    </OrderBottomBar>
  );
};

export default OrderBar;