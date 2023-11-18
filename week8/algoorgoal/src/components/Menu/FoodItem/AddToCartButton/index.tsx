import React from 'react';
import Button from '../../../../common/components/Button';
import Text from '../../../../common/components/Text';

interface AddToCartButtonPropsType {
  itemId: number;
}

export default function AddToCartButton({ itemId }: AddToCartButtonPropsType) {
  return (
    <Button
      type="button"
      color="primary"
      width="52px"
      height="32px"
      onClick={() => {
        console.log(itemId);
      }}
    >
      <Text size="extraSmall" color="white">
        담기
      </Text>
    </Button>
  );
}
