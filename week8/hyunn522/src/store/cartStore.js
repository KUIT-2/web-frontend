import { create } from "zustand";

const initialState = {
    store: '없음',
    menus: [],
    totalPrice: 0,
}

const useCartStore = create((set) => ({
    store: initialState.store,
    menus: initialState.menus,
    totalPrice: initialState.totalPrice,

    addMenu: (menu) => {
        set((state) => ({...state, menus: [...state.menus, menu]}))
    },
    calTotalPrice: (menu) => {
        set((state) => ({...state, totalPrice: menu.reduce((acc, currentMenu) => acc + currentMenu.price, 0)}))
    },
    setStore: (store) => {
        set((state) => ({...state, store: store}))
    },
}));

export default useCartStore;