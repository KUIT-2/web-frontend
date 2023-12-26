import { create } from 'zustand';
import { getCart, updateCart } from '../apis/cart';

const initialState = {
  store: '없음',
  menus: [],
  totalPrice: 0,
  cnt: 0,
};

const useCartStore = create((set, get) => ({
  store: initialState.store,
  menus: initialState.menus,
  totalPrice: initialState.totalPrice,
  cnt: initialState.cnt,

  setInitialized: () => {
    set((state) => ({
      ...state,
      menus: initialState.menus,
      cnt: initialState.cnt,
    }));
  },
  addMenu: (menu, store) => {
    set((state) => {
      const updatedMenus = state.menus.map((existingMenu) => {
        // 이미 담은 메뉴일 때
        if (existingMenu.id === menu.id) {
          return { ...existingMenu, cnt: (existingMenu.cnt || 0) + 1 };
        }
        return existingMenu;
      });

      // 새로운 menu일 때
      if (!updatedMenus.some((existingMenu) => existingMenu.id === menu.id)) {
        updatedMenus.push({ ...menu, cnt: 1 });
      }

      // new sum 계산
      const newSum = updatedMenus.reduce((acc) => {
        return acc + (menu.price || 0) * (menu.count || 0);
      }, 0);

      return {
        ...state,
        store,
        menus: updatedMenus,
        totalPrice: newSum,
      };
    });
    updateCart(store, get().menus);
  },
  fetchCart: async () => {
    const data = await getCart();
    set(data);
  },
  setStore: async (store) => {
    set((state) => ({ ...state, store }));
  },
  setSum: async (price) => {
    set((state) => ({ ...state, totalPrice: price }));
  },
  getCnt: (menuId) => {
    const menu = get().menus.find((m) => m.id === menuId);
    return menu ? menu.cnt || 0 : 0;
  },
}));

export default useCartStore;
