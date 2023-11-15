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
        set((state) => {
            if (!state.store || state.store.id !== store.id) return { ...state, store, menus: [] };
            return { ...state, store };
        });
    },
}));

export default useCartStore;
