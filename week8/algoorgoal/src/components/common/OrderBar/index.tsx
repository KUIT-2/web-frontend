import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../../../store/cartStore';
import OrderAmountContainer from './OrderAmountContainer';
import OrderButton from '../../OrderButton';
import Row from '../Row';

export default function OrderBar() {
  const cart = useCartStore((state) => state.cart);

  if (!cart) {
    return <>주문 불가능</>;
  }

  return (
    <Row justifyContent="space-between">
      <OrderAmountContainer
        orderAmount={Object.entries(cart).reduce(
          (accumulator, [id, { price, quantity }]) =>
            accumulator + price * quantity,
          0,
        )}
      />
      <OrderButton />
    </Row>
  );
}
