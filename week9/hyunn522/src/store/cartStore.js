import { create } from "zustand";
import { getCart, updateCart } from "../apis/cart";

const initialState = {
    store: '없음',
    menus: [],
    totalPrice: 0,
    cnt: 0,
}

const useCartStore = create((set, get) => ({
    store: initialState.store,
    menus: initialState.menus,
    totalPrice: initialState.totalPrice,
    cnt: initialState.cnt,

    setInitialized: () => {
        set((state) => ({
            ...state,
            store: initialState.store,
            menus: initialState.menus,
            totalPrice: initialState.totalPrice,
            cnt: initialState.cnt,
        }))
    },
    addMenu: (menu, store) => {
        set((state) => ({
            ...state,
            store,
            menus: [...state.menus, menu],
        }))
        updateCart(store, get().menus);
    },
    fetchCart: async () => {
        const data = await getCart();
        set(data);
    },
    setStore: async (store) => {
        set((state) => ({...state, store: store}))
    },
    setSum: async (price) => {
        set((state) => ({...state, totalPrice: price}))
    },
    addCnt: (menu) => {
        set((state) => ({...state, cnt: state.cnt + 1}));
    }
}));

export default useCartStore;