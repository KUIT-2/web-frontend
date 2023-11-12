import { create } from "zustand";

const initialState = {
    address: "",
};

const useUser = create((set) => ({
    ...initialState,

    setAddress: (address) => {
        set((state) => ({ ...state, address: address }));
    },
}));

export default useUser;
