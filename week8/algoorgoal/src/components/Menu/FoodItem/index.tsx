import React from 'react';
import { styled } from 'styled-components';
import { MenuItemType } from '../../../models/stores';
import FoodImage from './FoodImage';
import Row from '../../../common/components/Row';
import FoodName from './FoodName';
import Column from '../../../common/components/Column';
import FoodDetail from './FoodDetail';
import Text from '../../../common/components/Text';
import AddToCartButton from './AddToCartButton';

interface MenuItemPropsType {
  menuItem: MenuItemType;
}

const MenuRow = styled(Row)`
  align-items: center;
  margin: 16px 0px 16px 0px;
`;

const FoodInfoWrapper = styled(Column)`
  row-gap: 5px;
`;

const FoodNameWrapper = styled(FoodName)`
  display: flex;
  width: 100%;
  column-gap: 6px;
`;

export default function MenuItem({ menuItem }: MenuItemPropsType) {
  const { name, isBest, ...props } = menuItem;
  return (
    <MenuRow justifyContent="space-between">
      <FoodImage />
      <FoodInfoWrapper>
        <FoodNameWrapper>
          <span>{menuItem.name}</span>
          <span>
            {isBest && (
              <Text color="primary" size="medium">
                Best
              </Text>
            )}
          </span>
        </FoodNameWrapper>
        <FoodDetail {...props} />
      </FoodInfoWrapper>
      <AddToCartButton />
    </MenuRow>
  );
}
