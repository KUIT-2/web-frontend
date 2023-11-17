import React from 'react';
import Text from '../../../../common/components/Text';

interface FoodNamePropsType {
  children: React.ReactNode;
}
export default function FoodName({ children, ...props }: FoodNamePropsType) {
  return (
    <Text color="highlight" size="medium" {...props}>
      {children}
    </Text>
  );
}
