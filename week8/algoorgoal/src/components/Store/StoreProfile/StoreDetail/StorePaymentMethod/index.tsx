import React from 'react';
import Text from '../../../../common/Text';

interface StorePaymentMethodPropsType {
  paymentMethod: string;
}

export default function StorePaymentMethod({
  paymentMethod,
}: StorePaymentMethodPropsType) {
  switch (paymentMethod) {
    case 'toss':
      return (
        <Text color="base" size="small">
          결제방법 토스결제만 현장결제 안됨
        </Text>
      );
    case 'card':
      return (
        <Text color="base" size="small">
          결제방법 카드결제
        </Text>
      );
    case 'cash':
      return (
        <Text color="base" size="small">
          결제방법 현금결제
        </Text>
      );
    default:
      return (
        <Text color="base" size="small">
          결제방법 결제 불가능
        </Text>
      );
  }
}
