import { MenuItemType, MenuType, StoreType } from '../models/stores';

export const getCart = async () => {
  const response = await fetch('http://localhost:8080/cart');
  const data = await response.json();
  return data;
};

export const updateCart = async (store: StoreType, menu: MenuType) =>
  fetch('http://localhost:8080/cart', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      store,
      menu,
    }),
  });

export const deleteCart = async () =>
  fetch('http://localhost:8080/cart', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({}),
  });
