import { create } from "zustand";

import { getCart, updateCart } from "../apis/cart";

const initialState = {
  store: undefined,
  menus: [],
};

const useCartStore = create((set, get) => ({
  store: initialState.store,
  menus: initialState.menus,

  addMenu: (menu, store) => {
    set((state) => ({ ...state, store, menus: [...state.menus, menu] }));
    updateCart(store, get().menus);
  },
  fetchCart: async () => {
    const data = await getCart();
    set(data);
  },
  // deleteMenu
  // clearMenu
  // ...
}));

export default useCartStore;
