import { create } from "zustand";

const initialState = {
  store: undefined,
  menus: [],
};

const useCartStore = create((set) => ({
  // 상태 정의
  store: initialState.store,
  menus: initialState.menus,

  // 상태 수정 (reducer)
  addMenu: (menu) => {
    // set((state) => ({ ...state, menus: [...state.menus, menu] }));
    set((state) => {
      console.log("Updated Menus:", [...state.menus, menu]); // 배열 출력
      return { ...state, menus: [...state.menus, menu] };
    });
  },
  clearMenu: () => {
    set((state) => ({ ...state, menus: [], menuCounts: {} }));
  },
  setStore: (store) => {
    // set((state) => ({ ...state, store: store }));
    set((state) => {
      console.log("store: ", store);
      return { ...state, store: store };
    })
  },
}));

export default useCartStore;
