import React from 'react';

import Button from '../common/Button';
import Text from '../common/Text';

export default function OrderButton() {
  return (
    <Button
      type="button"
      width="84px"
      height="38px"
      onClick={() => {}}
      color="primary"
    >
      <Text size="small" color="white">
        주문하기
      </Text>
    </Button>
  );
}
