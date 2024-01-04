import React from 'react';
import FoodCategoryRow from './FoodCategoryRow';
import MenuItem from './FoodItem';
import useCartStore from '../../../store/cartStore';
import { MenuItemType, StoreType } from '../../../models/stores';

interface MenuPropsType {
  handleAddMenuItem: (menuItem: MenuItemType) => void;
}

export default function Menu({ handleAddMenuItem }: MenuPropsType) {
  const store = useCartStore((state) => state.store);

  if (!store) {
    return <>찾을 수 없어요</>;
  }

  return (
    <>
      <FoodCategoryRow foodCategory="샐러드" />
      {store?.menu.map((menuItem) => (
        <MenuItem
          key={menuItem.id}
          menuItem={menuItem}
          handleAddMenuItem={handleAddMenuItem}
        />
      ))}
    </>
  );
}
