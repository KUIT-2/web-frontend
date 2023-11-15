import { create } from "zustand";

const initialState = {
    store: undefined,
    menus: [],
    askingStoreSwitch: false, // 다른 가게의 메뉴를 담기 시도했을 때 true가 됨
    tempState: {
        store: undefined,
        menus: [],
    }, // 다른 가게의 메뉴를 담기 시도했을 때 임시로 저장할 state
};

const useCartStore = create((set) => ({
    ...initialState,

    addMenu: (store, menu) => {
        set((state) => {
            // 다른 가게의 메뉴를 담기 시도했을 때
            if (state.store !== undefined && state.store.id !== store.id) {
                return {
                    ...state,
                    askingStoreSwitch: true,
                    tempState: {
                        store,
                        menus: [menu],
                    },
                };
            } else {
                return {
                    ...state,
                    store,
                    menus: [...state.menus, menu],
                };
            }
        });
    },

    switchStore: (switchStore) => {
        if (switchStore === true) {
            set((state) => ({
                ...state,
                store: state.tempState.store,
                menus: state.tempState.menus,
                askingStoreSwitch: false,
                tempState: initialState.tempState,
            }));
        } else {
            set((state) => ({
                ...state,
                askingStoreSwitch: false,
                tempState: initialState.tempState,
            }));
        }
    },
}));

export default useCartStore;
