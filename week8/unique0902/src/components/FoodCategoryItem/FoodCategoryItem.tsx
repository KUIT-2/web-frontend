import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Food } from '../FoodCategories/FoodCategories';
import { CategoryItem } from './FoodCategoryItem.styles';

interface Props {
  food: Food;
}

const FoodCategoryItem: React.FC<Props> = ({ food }: Props) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate('./store');
  };
  return (
    <CategoryItem onClick={handleClick}>
      <img
        src={`./food-category/${food.img}.svg`}
        alt=''
        width={28}
        height={28}
      />
      <p>{food.name}</p>
    </CategoryItem>
  );
};

export default FoodCategoryItem;
