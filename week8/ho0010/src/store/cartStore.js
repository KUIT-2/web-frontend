import { create } from "zustand";

import {updateCart} from '../apis/cart';
import { getCart } from "../apis/cart";

const initialState = {
  store: undefined,
  menus: [],
  menuCount: {}
};

const useCartStore = create((set,get) => ({
  store: initialState.store,
  menus: initialState.menus,
  menuCount: initialState.menuCount,

  addMenu: (menu, store) => {
    set((state) => {
      const existingMenu = state.menus.findIndex((m) => m.id === menu.id);
      console.log(existingMenu)

      if (existingMenu !== -1) {
        const updatedMenus = [...state.menus];
        updatedMenus[existingMenu].menuCount += 1;

        return {
          ...state, store, menus: updatedMenus,
          menuCount: { ...state.menuCount, [menu.id]: state.menuCount[menu.id] + 1 }
        };  
      } else {
        return {
          ...state, store, menus: [...state.menus, { ...menu, menuCount: 1 }],
          menuCount: { ...state.menuCount, [menu.id]: 1 }
        };
      }
    }); 
    updateCart(store,get().menus); 
  },

  fetchCart: async() => {
    const data = await getCart();
    set(data);
  },

  clearMenus: () => {
    set((state) => ({ ...state, menus: [] }));
    updateCart({},[]); 

  }

}));

export default useCartStore;
