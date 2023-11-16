import { create } from "zustand";

const initialState = {
  store: undefined,
  menus: [],
};

const useCartStore = create((set) => ({
  store: initialState.store,
  menus: initialState.menus,

  addMenu: (menu) => {
    set((state) => ({ ...state, menus: [...state.menus, menu] }));
  },
  //set 화살표 함수 부분 중괄호 전체가 state가 되고 menus룰 변경하기위해
  setStore: (store) => {
    set((state) => ({ ...state, store: store }));
  },
}));

export default useCartStore;
