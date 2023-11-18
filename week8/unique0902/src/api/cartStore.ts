import { create } from 'zustand';
import { Menu } from '../store/type/menu';
import { Store } from '../store/type/store';
type State = {
  store: Store | undefined;
  menus: Menu[];
};

type StoresState = {
  store: Store | undefined;
  menus: Menu[];
  addMenu: (menu: Menu) => void;
  clearMenu: () => void;
  setStore: (store: Store) => void;
  clearAll: () => void;
};

const initialState: State = {
  store: undefined,
  menus: [],
};

const useCartStore = create<StoresState>((set) => ({
  store: initialState.store,
  menus: initialState.menus,

  addMenu: (menu: Menu) => {
    set((state: State) => {
      return { ...state, menus: [...state.menus, menu] };
    });
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
}));

export default useCartStore;
