import { create } from 'zustand';
import { MenuItemType, StoreType, MenuType } from '../models/stores';
import { getCart, updateCart, deleteCart } from '../apis/cart';

const initialState = {
  store: undefined,
  menu: undefined,
};

type CartStateType = {
  store: undefined | StoreType;
  menu: undefined | MenuType;
  addMenuItem: (menuItem: MenuItemType) => void;
  setStore: (store: StoreType) => void;
  fetchCart: () => Promise<CartStateWithoutActionType>;
  resetCart: () => void;
};

type CartStateWithoutActionType = Omit<
  CartStateType,
  'addMenuItem' | 'setStore' | 'fetchCart' | 'resetCart'
>;

const useCartStore = create<CartStateType>((set, get) => ({
  ...initialState,
  addMenuItem(menuItem) {
    set((state) => ({
      ...state,
      menu: state.menu ? [...state.menu, menuItem] : [menuItem],
    }));
    updateCart(get().store!, get().menu!);
  },

  fetchCart: async () => {
    const cart = await getCart();
    set(cart);
    console.log(cart);
    return cart;
  },

  setStore(store) {
    set((state) => ({
      ...state,
      store,
    }));
  },

  resetCart: () => {
    deleteCart();
    set(initialState);
  },
}));

export default useCartStore;
