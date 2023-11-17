import { create } from "zustand";

const initialState = {
  store: undefined,
  menus: [],
  counts:{},
};
const useCartStore = create((set) => ({
  // 초기 상태
  store: initialState.store,
  menus: initialState.menus,
  counts: initialState.counts,

  addMenu: (menu) => {
    set((state) => {
      // 메뉴가 이미 있는지 확인
      const existingMenuIndex = state.menus.findIndex((m) => m.id === menu.id);

      if (existingMenuIndex !== -1) {
        const updatedMenus = [...state.menus];
        updatedMenus[existingMenuIndex].counts += 1;

        return {
          ...state,
          menus: updatedMenus,
          counts: { ...state.counts, [menu.id]: state.counts[menu.id] + 1 },
        };
      } else {
        // 없는 경우 새로운 메뉴를 추가하고 counts를 1로 설정
        return {
          ...state,
          menus: [...state.menus, { ...menu, counts: 1 }],
          counts: { ...state.counts, [menu.id]: 1 },
        };
      }
    });
  },

  // 메뉴 초기화: 메뉴와 개수 빈 배열로 만들기
  cancelMenus: () => {
    set((state) => ({ ...state, menus: [], counts: {} }));
  },
  
  setStore: (store) => {
    set((state) => ({ ...state, store: store }));
  },

  // 스토어 초기화,
  cancelStore: () => {
    set((state) => ({ ...state, store: undefined }));
  },
}));

export default useCartStore;
