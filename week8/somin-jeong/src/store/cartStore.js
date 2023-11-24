import { create } from "zustand";
import { getCart, updateCart, clearCart } from "../apis/cart";

const initialState = {
  store: undefined,
  menus: [],
  menu: undefined
};

// menus:menu[]
// menus:cartItem[]

// const cartItem = {
//   ...menu,
//   itemId,
//   createdAt,
// }

const useCartStore = create((set, get) => ({
  store: initialState.store,
  menus: initialState.menus,

  addMenu: (menu, store) => { // menu: Menu, store: Store
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
  clearCartMenus: () => {
    set((state) => ({ ...state, store: undefined, menus: [] }));
    clearCart({}, []);
  }
}));

export default useCartStore;