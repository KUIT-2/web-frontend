import React from 'react';

import FoodCategoryItem from '../FoodCategoryItem/FoodCategoryItem';
import { Categories } from './FoodCategories.styles';

interface Props {}

export type Food = {
  name: string;
  img: string;
};

const foodCategories = [
  { name: '피자', img: 'pizza' },
  { name: '샐러드', img: 'salad' },
  { name: '햄버거', img: 'hamburger' },
  { name: '한식', img: 'korean' },
  { name: '분식', img: 'snack' },
  { name: '치킨', img: 'chicken' },
  { name: '초밥', img: 'sushi' },
  { name: '샌드위치', img: 'sandwich' },
  { name: '파스타', img: 'pasta' },
  { name: '디저트', img: 'dessert' },
  { name: '커피', img: 'coffee' },
  { name: '더보기', img: 'view_more' },
];

const FoodCategories: React.FC<Props> = ({}: Props) => {
  return (
    <Categories>
      {foodCategories.map((food) => (
        <FoodCategoryItem food={food} key={food.name} />
      ))}
    </Categories>
  );
};

export default FoodCategories;
