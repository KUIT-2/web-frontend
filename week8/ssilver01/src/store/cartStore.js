import { create } from "zustand";
import { updateCart, getCart } from "../api/cart";

const initialState = {
  store: undefined,
  menus: []
};

//cartstore,에서 해야 삭제하고 추가할때의 코드가 복잡해지지 않을 것.
const useCartStore = create((set, get) => ({
  // 초기 상태
  store: initialState.store,
  menus: initialState.menus,

  addMenu: (menu, store) => {
    set((state) => ({ ...state, store, menus: [...state.menus, menu]}));
    updateCart(get().menus);

  },

  fetchCart: async() => {
    const data = await getCart();
    set(data);
  },

  // 메뉴 초기화: 메뉴와 개수 빈 배열로 만들기
  cancelMenus: () => {
    set((state) => ({ ...state, menus: [] }));
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
