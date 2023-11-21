import { create } from "zustand";

const initialState = {
  store: undefined,
  menus: [],
  menuCount: {}
};

const useCartStore = create((set) => ({
  store: initialState.store,
  menus: initialState.menus,
  menuCount: initialState.menuCount,

  addMenu: (menu) => {
    set((state) => {
      const existingMenu = state.menus.findIndex((m) => m.id === menu.id);
      console.log(existingMenu)

      if (existingMenu !== -1) {
        const updatedMenus = [...state.menus];
        updatedMenus[existingMenu].menuCount += 1;

        return {
          ...state, menus: updatedMenus,
          menuCount: { ...state.menuCount, [menu.id]: state.menuCount[menu.id] + 1 }
        };
      } else {
        return {
          ...state, menus: [...state.menus, { ...menu, count: 1 }],
          menuCount: { ...state.menuCount, [menu.id]: 1 }
        };
      }
    });
  },
  //set 화살표 함수 부분 중괄호 전체가 state가 되고 menus룰 변경하기위해
  setStore: (store) => {
    set((state) => ({ ...state, store: store }));
  },

  clearMenus: () => {
    set((state) => ({ ...state, menus: [] }));
  }
}));

export default useCartStore;
