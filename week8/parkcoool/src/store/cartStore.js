import { create } from "zustand";

import { updateCart } from "../apis/cart";

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
            if (state.store && state.store.id !== store.id) {
                return {
                    ...state,
                    askingStoreSwitch: true,
                    tempState: {
                        store: store,
                        menus: [menu],
                    },
                };
            } else {
                updateCart(store, [...state.menus, menu]).then((res) => {
                    set((state) => ({
                        ...state,
                        ...res,
                    }));
                });

                return state;
            }
        });
    },

    switchStore: (switchStore) => {
        if (switchStore === true) {
            set((state) => {
                updateCart(state.tempState.store, state.tempState.menus).then((res) => {
                    set((state) => ({
                        ...state,
                        ...res,
                        askingStoreSwitch: false,
                        tempState: initialState.tempState,
                    }));
                });
                return state;
            });
        } else {
            set((state) => ({
                ...state,
                askingStoreSwitch: false,
                tempState: initialState.tempState,
            }));
        }
    },

    reset: () => {
        updateCart(initialState.store, initialState.menus);
        set(initialState);
    },

    getTotal: () => {
        let total = 0;
        set((state) => {
            total = state.menus.reduce((acc, currentMenu) => acc + currentMenu.price, 0);
            return state;
        });
        return total;
    },
}));

export default useCartStore;
