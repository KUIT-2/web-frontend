import { create } from 'zustand';
import { StoreType, MenuItemType, MenuType } from '../models/stores';

const initialState = {
  store: undefined,
  cart: undefined,
};

type CartStateType = {
  store: undefined | StoreType;
  cart: CartItemType;
  addItemToCart: (menu: MenuItemType) => void;
  setStore: (store: StoreType) => void;
};

export type CartItemType =
  | undefined
  | {
      [id: number]: Omit<MenuItemType, 'id'> & { quantity: number };
    };

const useCartStore = create<CartStateType>((set) => ({
  ...initialState,

  addItemToCart({ id, ...menuItemProps }) {
    set((state) => {
      if (!state.cart || !state.cart[id]) {
        return {
          ...state,
          cart: {
            ...state.cart,
            [id]: {
              ...menuItemProps,
              quantity: 1,
            },
          },
        };
      }
      return {
        ...state,
        cart: {
          ...state.cart,
          [id]: {
            ...state.cart[id],
            quantity: state.cart[id].quantity + 1,
          },
        },
      };
    });
  },

  setStore(store) {
    set((state) => ({ ...state, store }));
  },
}));

export default useCartStore;
