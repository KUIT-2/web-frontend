import { create } from "zustand";

const initialState = {
  store: undefined,
  menus: [],
  menuCounts: {}, // 각 메뉴의 개수를 저장하는 객체
};

const useCartStore = create((set) => ({
  store: initialState.store,
  menus: initialState.menus,
  menuCounts: initialState.menuCounts,

  addMenu: (menu) => {
    set((state) => {
      const updatedMenuCounts = { ...state.menuCounts };
      let menuAlreadyExists = false;

      // 메뉴 개수 업데이트
      updatedMenuCounts[menu.id] = (updatedMenuCounts[menu.id] || 0) + 1;

      state.menus.map((oldMenu) => {
          if (oldMenu.id === menu.id) {
            menuAlreadyExists = true;
          }
      })

      if (menuAlreadyExists) {
        return { ...state, menuCounts: updatedMenuCounts }
      }

      const updatedMenus = [...state.menus, menu];

      return { ...state, menus: updatedMenus, menuCounts: updatedMenuCounts };
    });
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