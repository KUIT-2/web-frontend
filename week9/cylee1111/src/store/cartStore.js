import { create } from "zustand";
import { getCart, updateCart, deleteCart } from "../apis/cart";

const initialState = {
  store: undefined,
  menus: [],
};

const useCartStore = create((set, get) => ({
  // 상태 정의
  store: initialState.store,
  menus: initialState.menus,

  // 상태 수정 (reducer)
  addMenu: (menu, store) => {
    set((state) => ({ ...state, store, menus: [...state.menus, menu] }));
    updateCart(store, get().menus);
  },
  clearMenu: (store) => {
    set((state) => ({ ...state, store, menus: [], menuCounts: {} }));
    updateCart(store, get().menus);
  },
  fetchCart: async() => {
    const data = await getCart();
    console.log("🚀 ~ file: cartStore.js:20 ~ fetchCart: ~ data:", data);
    set(data);
  }
}));

export default useCartStore;
