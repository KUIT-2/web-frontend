import React from 'react';
import { useParams } from 'react-router-dom';
import FoodCategoryRow from './FoodCategoryRow';
import MenuItem from './FoodItem';
import useCartStore from '../../store/cartStore';

export default function Menu() {
  const store = useCartStore((state) => state.store);

  return (
    <>
      <FoodCategoryRow foodCategory="샐러드" />
      {store?.menu.map((menuItem) => (
        <MenuItem key={menuItem.id} menuItem={menuItem} />
      ))}
    </>
  );
}
