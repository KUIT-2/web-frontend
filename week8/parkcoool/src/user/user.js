import { create } from "zustand";

const initialState = {
    address: "능동로 120 (건국대학교)",
};

const useUser = create((set) => ({
    ...initialState,

    setAddress: (address) => {
        set((state) => ({ ...state, address: address }));
    },
}));

export default useUser;
