import { create } from 'zustand';
import { Menu } from '../store/type/menu';
import { Store } from '../store/type/store';
//TODO: store 초기화 로직 고민
type State = {
  store: Store | undefined;
  menus: Menu[];
};

type StoresState = {
  store: Store | undefined;
  menus: Menu[];
  addMenu: (menu: Menu, storeId: number) => void;
  setStore: (store: Store) => void;
  clearOrder: () => void;
};

const initialState: State = {
  store: undefined,
  menus: [],
};

const useCartStore = create<StoresState>((set) => ({
  store: initialState.store,
  menus: initialState.menus,

  addMenu: (menu: Menu, storeId: number) => {
    set((state: State) => {
      if (!state.store || state.store.id !== storeId) {
        return { ...state, menus: [menu] };
      } else {
        return { ...state, menus: [...state.menus, menu] };
      }
    });
  },
  setStore: (store: Store) => {
    set((state: State) => ({ ...state, store: store }));
  },

  clearOrder: () => {
    set((state: State) => ({ ...state, store: undefined, menus: [] }));
  },
}));

export default useCartStore;
