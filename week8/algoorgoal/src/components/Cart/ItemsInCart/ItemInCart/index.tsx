import React from 'react';
import styled from 'styled-components';
import Row from '../../../common/Row';
import { SquarePortraitIcon } from '../../../../common/styles/Icons';
import Column from '../../../common/Column';
import Text from '../../../common/Text';
import { MenuItemType } from '../../../../models/stores';
import { CartItemType } from '../../../../store/cartStore';

const FoodItemWrapper = styled(Row)`
  justify-content: space-between;
`;

interface ItemsInCartPropsType {
  cartItem: Omit<MenuItemType, 'id'> & { quantity: number };
}

export default function ItemsInCart({ cartItem }: ItemsInCartPropsType) {
  return (
    <FoodItemWrapper>
      <SquarePortraitIcon width="54px" />
      <Column>
        <Text color="base" size="medium">
          {cartItem.name}
        </Text>
        <Text color="muted" size="small">
          {cartItem.ingredients}
        </Text>
        <Text color="muted" size="small">
          {cartItem.price}원
        </Text>
      </Column>
      <Text color="muted" size="small">
        {cartItem.quantity}개
      </Text>
    </FoodItemWrapper>
  );
}
