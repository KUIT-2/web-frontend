import React from 'react';
import OrderAmountText from '../OrderAmountText';
import OrderAmount from '../OrderAmount';
import * as S from './index.styles';

interface OrderAmountContainerPropsType {
  orderAmount: number;
}

export default function OrderAmountContainer({
  orderAmount,
}: OrderAmountContainerPropsType) {
  return (
    <S.Container>
      <OrderAmountText />
      <OrderAmount orderAmount={orderAmount} />
    </S.Container>
  );
}
