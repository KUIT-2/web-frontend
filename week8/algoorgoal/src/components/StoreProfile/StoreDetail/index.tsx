import React from 'react';
import styled from 'styled-components';
import StorePaymentMethod from './StorePaymentMethod';
import StoreMinimumOrderValue from './StoreMinimumOrderValue';
import StoreDeliveryTime from './StoreDelieveryTime';

const DetailsWrapper = styled.span`
  display: flex;
  flex-direction: column;
  row-gap: 9px;
  margin: 9px 0px 14px 0px;
`;

export default function StoreDetail() {
  return (
    <DetailsWrapper>
      <StorePaymentMethod paymentMethod="toss" />
      <StoreMinimumOrderValue minimumOrderValue={13000} />
      <StoreDeliveryTime minDeliveryTime={12} maxDeliveryTime={40} />
    </DetailsWrapper>
  );
}
