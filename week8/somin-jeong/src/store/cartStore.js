import { create } from "zustand";
import { getCart, updateCart } from "../apis/cart";

const initialState = {
  store: undefined,
  menus: [],
  menuCounts: {}, // 각 메뉴의 개수를 저장하는 객체
};

const useCartStore = create((set, get) => ({
  store: initialState.store,
  menus: initialState.menus,

  addMenu: (menu, store) => {
    set((state) => {
      let menuAlreadyExists = false;

      state.menus.map((oldMenu) => {
          if (oldMenu.id === menu.id) {
            menuAlreadyExists = true;
            oldMenu.counts = oldMenu.counts + 1;
          }
      })

      console.log(...state.menus);

      if (menuAlreadyExists) {
        return { ...state, store, ...state.menus};
      }

      menu.counts = menu.counts + 1;
      const updatedMenus = [...state.menus, menu];


      return { ...state, store, menus: updatedMenus };
    });
    updateCart(store, get().menus);
    
  },
  fetchCart: async () => {
    const data = await getCart();
    set(data);
  },
  setStore: (store) => {
    set((state) => ({ ...state, store: store }));
  },
  clearMenus: () => {
    set((state) => ({ ...state, menus: [], menuCounts: {} }));
  },
  clearStore: () => {
    set((state) => ({ ...state, store: undefined }));
  }
}));

export default useCartStore;