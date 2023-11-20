import { create } from 'zustand';
import { StoreType, MenuItemType, MenuType } from '../models/stores';

const initialState = {
  store: undefined,
  cart: [],
};

type CartStateType = {
  store: undefined | StoreType;
  cart: MenuType;
  addItemToCart: (menu: MenuItemType) => void;
  setStore: (store: StoreType) => void;
};

const useCartStore = create<CartStateType>((set) => ({
  ...initialState,

  addItemToCart(menuItem) {
    set((state) => ({
      ...state,
      cart: [...state.cart, menuItem],
    }));
  },

  setStore(store) {
    set((state) => ({ ...state, store }));
  },
}));

export default useCartStore;
