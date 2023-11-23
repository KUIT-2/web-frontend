import { MenuItemType, MenuType } from './../models/stores';
import { StoreType } from '../models/stores';

export const getCart = async () => {
  const response = await fetch('http://localhost:8080/cart');
  const data = await response.json();
  return data;
};

export const updateCart = async (store: StoreType, item: MenuType) =>
  fetch('http://localhost:8080/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      store,
      item,
    }),
  });
