import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../../api/cartStore';
import PrimaryBtn from '../Button/PrimaryBtn/PrimaryBtn';
import {
  OrderFooter,
  OrderSection,
  OrderSectionTitle,
  OrderSectPrice,
} from './OrderBar.styles';

const OrderBar = () => {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);
  const navigate = useNavigate();
  const handleOrder = () => {
    navigate('cart');
  };

  return (
    <OrderFooter>
      <OrderSection>
        <OrderSectionTitle>총 주문금액</OrderSectionTitle>
        <OrderSectPrice>
          {menus.reduce((acc, currentMenu) => acc + currentMenu.price, 0)}원
        </OrderSectPrice>
      </OrderSection>

      <PrimaryBtn handleClick={handleOrder}>
        {store && store.name + '에서'} 주문하기
      </PrimaryBtn>
    </OrderFooter>
  );
};

export default OrderBar;
