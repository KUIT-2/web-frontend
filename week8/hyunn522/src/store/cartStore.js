import { create } from "zustand";

const initialState = {
    store: '없음',
    menus: [],
    totalPrice: 0,
    cnt: 0,
}

const useCartStore = create((set) => ({
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
    addMenu: (menu) => {
        set((state) => ({...state, menus: [...state.menus, menu]}))
    },
    calTotalPrice: (menu) => {
        set((state) => ({...state, totalPrice: state.totalPrice + menu.price}));
    },
    setStore: (store) => {
        set((state) => ({...state, store: store}))
    },
    addCnt: (menu) => {
        set((state) => ({...state, cnt: state.cnt + 1}));
    }
}));

export default useCartStore;