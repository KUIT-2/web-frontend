import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../../../store/cartStore';
import OrderAmountContainer from './OrderAmountContainer';
import OrderButton from '../../OrderButton';
import Row from '../Row';

export default function OrderBar() {
  const menu = useCartStore((state) => state.menu);

  if (!menu) {
    return <>주문 불가능</>;
  }

  return (
    <Row justifyContent="space-between">
      <OrderAmountContainer
        orderAmount={menu.reduce(
          (accumulator, menuItem) => accumulator + menuItem.price,
          0,
        )}
      />
      <OrderButton />
    </Row>
  );
}
