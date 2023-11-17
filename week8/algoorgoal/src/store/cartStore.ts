import { create } from 'zustand';
import { StoreType, MenuItemType, MenusType } from '../models/stores';

const initialState = {
  store: undefined,
  menus: [],
};

type CartStateType = {
  store: undefined | StoreType;
  menus: MenusType;
  addMenu: (menu: MenuItemType) => void;
  setStore: (store: StoreType) => void;
};

const useCartStore = create<CartStateType>((set) => ({
  ...initialState,

  addMenu(menu) {
    set((state) => ({
      ...state,
      menus: [...state.menus, menu],
    }));
  },

  setStore(store) {
    set((state) => ({ ...state, store }));
  },
}));

export default useCartStore;
