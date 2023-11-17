import React from 'react';
import Text from '../../../common/components/Text';

interface StoreReviewCountPropsType {
  reviewCount: number;
}

export default function StoreReviewCount({
  reviewCount,
}: StoreReviewCountPropsType) {
  return (
    <Text color="base" size="medium">
      리뷰 {reviewCount}
    </Text>
  );
}
