import { create } from "zustand";

const initialState = {
    store: '',
    menus: []
}

const useCartStore = create((set) => ({
    store: initialState.store,
    menus: initialState.menus,

    addMenu: (menu) => {
        set((state) => ({...state, menus: [...state.menus, menu]}))
    },
    setStore: (store) => {
        set((state) => ({...state, store: store}))
    },
}));

export default useCartStore;