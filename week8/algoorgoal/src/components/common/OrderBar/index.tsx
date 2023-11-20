import React from 'react';
import { useNavigate } from 'react-router-dom';
import useCartStore from '../../../store/cartStore';
import OrderAmountContainer from './OrderAmountContainer';
import OrderButton from '../../OrderButton';
import Row from '../Row';

export default function OrderBar() {
  const cart = useCartStore((state) => state.cart);

  return (
    <Row justifyContent="space-between">
      <OrderAmountContainer
        orderAmount={cart.reduce(
          (accumulator, menuItem) => accumulator + menuItem.price,
          0,
        )}
      />
      <OrderButton />
    </Row>
  );
}
