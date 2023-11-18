import React from 'react';
import Text from '../../../common/Text';

interface StoreRatingPropsType {
  rating: number;
}

export default function StoreRating({ rating }: StoreRatingPropsType) {
  return (
    <Text color="base" size="medium">
      ⭐{rating}
    </Text>
  );
}
