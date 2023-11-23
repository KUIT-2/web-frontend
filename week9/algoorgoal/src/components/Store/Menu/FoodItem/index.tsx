import React from 'react';
import { styled } from 'styled-components';
import FoodImage from './FoodImage';

import FoodName from './FoodName';

import FoodDetail from './FoodDetail';
import AddToCartButton from './AddToCartButton';
import { MenuItemType, StoreType } from '../../../../models/stores';
import Row from '../../../common/Row';
import Column from '../../../common/Column';
import Text from '../../../common/Text';

interface MenuItemPropsType {
  menuItem: MenuItemType;
  handleAddMenuItem: (menuItem: MenuItemType) => void;
}

const MenuRow = styled(Row)`
  align-items: center;
  margin: 16px 0px 16px 0px;
`;

const FoodInfoWrapper = styled(Column)`
  width: 201px;
  row-gap: 5px;
`;

const FoodNameWrapper = styled(FoodName)`
  display: flex;
  width: 100%;
  column-gap: 6px;
`;

export default function MenuItem({
  menuItem,
  handleAddMenuItem,
}: MenuItemPropsType) {
  const { id, name, isBest, ...props } = menuItem;
  return (
    <MenuRow justifyContent="space-between">
      <FoodImage />
      <FoodInfoWrapper>
        <FoodNameWrapper>
          <span>{menuItem.name}</span>
          <span>
            {isBest && (
              <Text color="primary" size="medium">
                BEST
              </Text>
            )}
          </span>
        </FoodNameWrapper>
        <FoodDetail {...props} />
      </FoodInfoWrapper>
      <AddToCartButton menuItem={menuItem} />
    </MenuRow>
  );
}
