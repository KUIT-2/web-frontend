import React from 'react';
import Text from '../../../../common/Text';

interface StoreMinimumOrderValuePropsType {
  minimumOrderValue: number;
}

export default function StoreMinimumOrderValue({
  minimumOrderValue,
}: StoreMinimumOrderValuePropsType) {
  return (
    <Text color="base" size="small">
      최소주문: {minimumOrderValue}원
    </Text>
  );
}
