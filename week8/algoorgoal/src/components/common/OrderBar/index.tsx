import React from 'react';
import useCartStore from '../../../store/cartStore';
import OrderAmountContainer from './OrderAmountContainer';
import OrderButton from '../../OrderButton';
import Row from '../Row';

export default function OrderBar() {
  const menu = useCartStore((state) => state.menu);

  // todo: handleOrder
  // const handleOrder = () => {};

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
