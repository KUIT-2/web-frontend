import React from 'react';
import styled from 'styled-components';
import Column from '../../../../common/components/Column';
import Text from '../../../../common/components/Text';

interface FoodDetailPropsType {
  price: number;
  ingredients: string;
}

const FoodDetailColumn = styled(Column)`
  row-gap: 5px;
`;

export default function FoodDetail({
  price,
  ingredients,
}: FoodDetailPropsType) {
  return (
    <FoodDetailColumn justifyContent="flex-start">
      <Text color="muted" size="extraSmall">
        {price}원
      </Text>
      <Text color="muted" size="extraSmall">
        {ingredients}
      </Text>
    </FoodDetailColumn>
  );
}
