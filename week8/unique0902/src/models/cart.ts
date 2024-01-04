import { Menu } from '../store/type/menu';
import { Store } from '../store/type/store';

export const getCart = async () => {
  const response = await fetch('http://localhost:8081/cart');
  const data = await response.json();
  return data;
};
export const updateCart = async (store: Store, menus: Menu[]) => {
  return await fetch(`http://localhost:8081/cart`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      store,
      menus,
    }),
  });
};
