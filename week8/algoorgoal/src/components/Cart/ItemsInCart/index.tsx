import React from 'react';
import styled from 'styled-components';
import Row from '../../common/Row';
import { SquarePortraitIcon } from '../../../common/styles/Icons';
import Column from '../../common/Column';
import Text from '../../common/Text';
import useCartStore from '../../../store/cartStore';
import ItemInCart from './ItemInCart';

const FoodItemWrapper = styled(Row)`
  justify-content: space-between;
`;

export default function ItemsInCart() {
  const cart = useCartStore((state) => state.cart);

  return (
    <span>
      {cart &&
        Object.entries(cart).map(([id, cartItem]) => (
          <ItemInCart key={id} cartItem={cartItem} />
        ))}
    </span>
  );
}
