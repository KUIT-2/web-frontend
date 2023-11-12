import { create } from "zustand";

const initialState = {
    store: undefined,
    menus: [],
};

const useCartStore = create((set) => ({
    ...initialState,

    addMenu: (menu) => {
        set((state) => ({ ...state, menus: [...state.menus, menu] }));
    },
    setStore: (store) => {
        set((state) => ({ ...state, store: store }));
    },
}));

export default useCartStore;
