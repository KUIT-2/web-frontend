import React from 'react';
import Button from '../../../../common/components/Button';
import Text from '../../../../common/components/Text';

export default function AddToCartButton() {
  return (
    <Button
      type="button"
      color="primary"
      width="52px"
      height="32px"
      onClick={() => {}}
    >
      <Text size="extraSmall" color="white">
        담기
      </Text>
    </Button>
  );
}
