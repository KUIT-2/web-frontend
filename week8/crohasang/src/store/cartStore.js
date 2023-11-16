import { create } from "zustand";

const initialState = {
  store: undefined,
  menus: [],

  menuCounts: {},
};

const useCartStore = create((set) => ({
  store: initialState.store,
  menus: initialState.menus,

  addMenu: (menu) => {
    set((state) => {

      const updatedMenus = [...state.menus, menu];
      const updatedMenuCounts = updatedMenus.reduce((counts, menuItem) => {
        counts[menuItem.id] = (counts[menuItem.id] || 0) + 1;
        return counts;
      }, {});

      return {
        ...state,
        menus: updatedMenus,
        menuCounts: updatedMenuCounts,
      };
    });
  },

  clearMenus: () => {
    set((state) => ({ ...state, menus: [], menuCounts: {} }));
  },

  
  setStore: (store) => {
    set((state) => ({ ...state, store: store }));
  },


  

}));

export default useCartStore;
