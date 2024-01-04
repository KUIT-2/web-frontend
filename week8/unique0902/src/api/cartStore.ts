import { create } from 'zustand';
import { getCart, updateCart } from '../models/cart';
import { Menu } from '../store/type/menu';
import { Store } from '../store/type/store';
type State = {
  store: Store | undefined;
  menus: Menu[];
};

type StoresState = {
  store: Store | undefined;
  menus: Menu[];
  addMenu: (menu: Menu, store: Store) => void;
  clearMenu: () => void;
  setStore: (store: Store) => void;
  clearAll: () => void;
  fetchCart: () => void;
};

const initialState: State = {
  store: undefined,
  menus: [],
};

const useCartStore = create<StoresState>((set, get) => ({
  store: initialState.store,
  menus: initialState.menus,

  addMenu: (menu: Menu, store: Store) => {
    set((state: State) => {
      return { ...state, menus: [...state.menus, menu] };
    });
    updateCart(store, get().menus);
  },

  clearMenu: () => {
    set((state: State) => {
      return { ...state, menus: [] };
    });
  },
  setStore: (store: Store) => {
    set((state: State) => ({ ...state, store: store }));
  },

  clearAll: () => {
    set((state: State) => ({ ...state, store: undefined, menus: [] }));
  },

  fetchCart: async () => {
    const data = await getCart();
    set(data);
  },
}));

export default useCartStore;
