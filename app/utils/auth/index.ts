import { localStorageKey } from "@/app/enum/localStorage";

export const localStorageLogin = () => {
  localStorage.setItem(localStorageKey.IS_LOGGED_IN, "true");
};

export const localStorageLogout = () => {
  localStorage.removeItem(localStorageKey.IS_LOGGED_IN);
};