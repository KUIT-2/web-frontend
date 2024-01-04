import React from 'react';
import Button from '../../../../common/Button';
import Text from '../../../../common/Text';
import useCartStore from '../../../../../store/cartStore';
import { MenuItemType } from '../../../../../models/stores';

interface AddToCartButtonPropsType {
  menuItem: MenuItemType;
}

export default function AddToCartButton({
  menuItem,
}: AddToCartButtonPropsType) {
  const addItemToCart = useCartStore((state) => state.addItemToCart);

  return (
    <Button
      type="button"
      width="52px"
      height="32px"
      onClick={() => {
        addItemToCart(menuItem);
      }}
    >
      <Text size="extraSmall" color="white">
        담기
      </Text>
    </Button>
  );
}
