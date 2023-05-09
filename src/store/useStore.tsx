import { create } from "zustand";
import counterSlice from "./slices/counterSlice";
import userAgentSlice from "./slices/userAgentSlice";
import profileDataSlice from "./slices/profileDataSlice";

export const useStore = create<any>()((...arg) => ({
  ...counterSlice(...arg),
  ...userAgentSlice(...arg),
  ...profileDataSlice(...arg),
}));
