import React from 'react';
import Row from '../../../common/Row';
import Text from '../../../common/Text';

interface FoodCategoryRowPropsType {
  foodCategory: string;
}

export default function FoodCategoryRow({
  foodCategory,
}: FoodCategoryRowPropsType) {
  return (
    <Row justifyContent="flex-start">
      <Text color="muted" size="medium">
        {foodCategory}
      </Text>
    </Row>
  );
}
