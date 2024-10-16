import { create } from "zustand";

import { persist } from "zustand/middleware";

type AuthStore = {
  uid: string;
  email: string;
  isAdmin: boolean;
  navigationTab: number;
  setUid: (uid: string) => void;
  setEmail: (email: string) => void;
  setIsAdmin: (isAdmin: boolean) => void;
  setNavigationTab: (number: number) => void;
  reset: () => void;
};

const initalState = {
  uid: "",
  email: "",
  isAdmin: false,
  isSuperAdmin: false,
  navigationTab: 0,
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      ...initalState,
      setUid: (uid: string) => set({ uid }),
      setEmail: (email: string) => set({ email }),
      setIsAdmin: (isAdmin: boolean) => set({ isAdmin }),
      setNavigationTab: (navigationTab: number) => set({ navigationTab }),
      reset: () => set(initalState),
    }),
    {
      name: "auth-store",
    }
  )
);

export default useAuthStore;