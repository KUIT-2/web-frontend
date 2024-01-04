import React from 'react';
import styled from 'styled-components';
import Row from '../../../common/Row';
import { SquarePortraitIcon } from '../../../../common/styles/Icons';
import Column from '../../../common/Column';
import Text from '../../../common/Text';
import { MenuItemType } from '../../../../models/stores';

const FoodItemWrapper = styled(Row)`
  justify-content: space-between;
`;

export type MenuItemWithQuantityType = MenuItemType & { quantity: number };

export type MenuWithQuantityType = MenuItemWithQuantityType[];

interface ItemsInCartPropsType {
  menuItemWithQuantity: MenuItemWithQuantityType;
}

export default function ItemsInCart({
  menuItemWithQuantity,
}: ItemsInCartPropsType) {
  return (
    <FoodItemWrapper>
      <SquarePortraitIcon width="54px" />
      <Column>
        <Text color="base" size="medium">
          {menuItemWithQuantity.name}
        </Text>
        <Text color="muted" size="small">
          {menuItemWithQuantity.ingredients}
        </Text>
        <Text color="muted" size="small">
          {menuItemWithQuantity.price}원
        </Text>
      </Column>
      <Text color="muted" size="small">
        {menuItemWithQuantity.quantity}개
      </Text>
    </FoodItemWrapper>
  );
}
