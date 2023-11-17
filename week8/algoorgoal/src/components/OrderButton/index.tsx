import React from 'react';

import Button from '../../common/components/Button';
import Text from '../../common/components/Text';

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
