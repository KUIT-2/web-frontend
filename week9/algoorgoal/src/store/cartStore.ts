import { create } from 'zustand';
import { MenuItemType, StoreType, MenuType } from '../models/stores';
import { updateCart } from '../apis/cart';

const initialState = {
  store: undefined,
  menu: undefined,
};

type CartStateType = {
  store: undefined | StoreType;
  menu: undefined | MenuType;
  addMenuItem: (menuItem: MenuItemType) => void;
  setStore: (store: StoreType) => void;
};

const useCartStore = create<CartStateType>((set, get) => ({
  ...initialState,
  addMenuItem(menuItem) {
    set((state) => ({
      ...state,
      menu: state.menu && [...state.menu, menuItem],
    }));

    updateCart(get().store!, get().menu!);
  },

  setStore(store) {
    set((state) => ({
      ...state,
      store,
    }));
  },
}));

export default useCartStore;
