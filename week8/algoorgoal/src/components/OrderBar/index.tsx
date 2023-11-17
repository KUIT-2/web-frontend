import React from 'react';
import useCartStore from '../../store/cartStore';
import OrderAmountContainer from './OrderAmountContainer';
import OrderButton from '../OrderButton';
import Row from '../../common/components/Row';

export default function OrderBar() {
  const menus = useCartStore((state) => state.menus);
  const store = useCartStore((state) => state.store);

  const handleOrder = () => {};

  return (
    <Row justifyContent="space-between">
      <OrderAmountContainer
        orderAmount={menus.reduce(
          (accumulator, menu) => accumulator + menu.price,
          0,
        )}
      />
      <OrderButton />
    </Row>
  );
}
