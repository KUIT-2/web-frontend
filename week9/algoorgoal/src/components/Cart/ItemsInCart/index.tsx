import React from 'react';
import styled from 'styled-components';
import Row from '../../common/Row';
import { SquarePortraitIcon } from '../../../common/styles/Icons';
import Column from '../../common/Column';
import Text from '../../common/Text';
import useCartStore from '../../../store/cartStore';

import { MenuItemType, MenuType } from '../../../models/stores';
import ItemInCart, { MenuWithQuantityType } from './ItemInCart';

const FoodItemWrapper = styled(Row)`
  justify-content: space-between;
`;

export default function ItemsInCart() {
  const menuInCart = useCartStore((state) => state.menu)!;

  const menuWithQuantity = menuInCart?.reduce(
    (accumualtor: MenuWithQuantityType, currentMenuItem) => {
      let isItemInAccumulator = false;
      // eslint-disable-next-line array-callback-return
      const existingMenuItem = accumualtor.map((previousMenuItem) => {
        if (previousMenuItem.id === currentMenuItem.id) {
          // eslint-disable-next-line no-param-reassign
          previousMenuItem.quantity += 1;
          isItemInAccumulator = true;
        }
      });

      if (isItemInAccumulator) {
        return accumualtor;
      }

      return [...accumualtor, { ...currentMenuItem, quantity: 1 }];
    },
    [],
  );

  return (
    <span>
      {menuWithQuantity &&
        menuWithQuantity.map((menuItemWithQuantity) => (
          <ItemInCart
            key={menuItemWithQuantity.id}
            menuItemWithQuantity={menuItemWithQuantity}
          />
        ))}
    </span>
  );
}
