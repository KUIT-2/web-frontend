import React from 'react';

import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';
import Text from '../common/Text';

export default function OrderButton() {
  const navigate = useNavigate();

  return (
    <Button
      type="button"
      width="84px"
      height="38px"
      onClick={() => {
        navigate('/cart');
      }}
    >
      <Text size="small" color="white">
        주문하기
      </Text>
    </Button>
  );
}
