import { create } from 'zustand';
import { StoreType, MenuItemType, MenuType } from '../models/stores';

const initialState = {
  store: undefined,
  menu: [],
};

type CartStateType = {
  store: undefined | StoreType;
  menu: MenuType;
  addToMenu: (menu: MenuItemType) => void;
  setStore: (store: StoreType) => void;
};

const useCartStore = create<CartStateType>((set) => ({
  ...initialState,

  addToMenu(menuItem) {
    set((state) => ({
      ...state,
      menu: [...state.menu, menuItem],
    }));
  },

  setStore(store) {
    set((state) => ({ ...state, store }));
  },
}));

export default useCartStore;
