import React from 'react';
import Text from '../../../../common/Text';

interface StoreDeliveryTimePropsType {
  minDeliveryTime: number;
  maxDeliveryTime: number;
}

export default function StoreDeliveryTime({
  minDeliveryTime,
  maxDeliveryTime,
}: StoreDeliveryTimePropsType) {
  return (
    <Text color="base" size="small">
      배달시간: 약 {minDeliveryTime}~{maxDeliveryTime}분
    </Text>
  );
}
