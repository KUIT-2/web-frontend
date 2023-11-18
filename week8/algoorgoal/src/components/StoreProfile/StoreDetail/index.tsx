import React from 'react';
import styled from 'styled-components';
import StorePaymentMethod from './StorePaymentMethod';
import StoreMinimumOrderValue from './StoreMinimumOrderValue';
import StoreDeliveryTime from './StoreDelieveryTime';
import useCartStore from '../../../store/cartStore';

const DetailsWrapper = styled.span`
  display: flex;
  flex-direction: column;
  row-gap: 9px;
  margin: 9px 0px 14px 0px;
`;

export default function StoreDetail() {
  const store = useCartStore((state) => state.store);

  if (!store) {
    return <>찾을 수가 없어요.</>;
  }

  return (
    <DetailsWrapper>
      <StorePaymentMethod paymentMethod="toss" />
      <StoreMinimumOrderValue minimumOrderValue={store.minimumOrderValue} />
      <StoreDeliveryTime
        minDeliveryTime={store.minDeliveryTime}
        maxDeliveryTime={store.maxDeliveryTime}
      />
    </DetailsWrapper>
  );
}
