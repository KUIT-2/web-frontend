import { create } from "zustand";
import { updateCart, getCart } from "../apis/cart";

const initialState = {
  store: undefined,
  menus: [],
  menuCounts: {},
};

const useCartStore = create((set, get) => ({
  store: initialState.store,
  menus: initialState.menus,
  menuCounts: initialState.menuCounts,


  addMenu: (menu, store) => {
    set((state) => ({ ...state, store, menus: [...state.menus, menu] }));
    updateCart(store, get().menus);
  },

  clearMenu: () => {
    set((state) => ({ ...state, menus: [], menuCounts: [] }));
    updateCart(get().store, []);
  },
  fetchCart: async () => {
    const data = await getCart();
    set(data);
  },

  countMenu: (menuId) => {

    set((state) => {
      const updatedMenuCounts = { ...state.menuCounts, [menuId]: (state.menuCounts[menuId] || 0) + 1 };
      return { ...state, menuCounts: updatedMenuCounts };
    });
  },

  getMenuCounts: () => get().menuCounts,


}));

export default useCartStore;
