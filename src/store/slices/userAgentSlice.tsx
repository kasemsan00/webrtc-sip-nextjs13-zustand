import { StateCreator } from "zustand";

interface IUserAgentSlice {
  userAgent: any;
  setUserAgent: (arg0: any) => void;
}

const userAgentSlice: StateCreator<IUserAgentSlice> = (set, get) => ({
  userAgent: undefined,
  setUserAgent(data: any) {
    set(() => ({ userAgent: data }));
  },
});

export default userAgentSlice;
