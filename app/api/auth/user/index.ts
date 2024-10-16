import supabase from "@/app/config/supabase";

export const login = async (email: string, password: string) => {
  return supabase.auth.signInWithPassword({
    email,
    password,
  });
};

export const signOut = async () => {
  return supabase.auth.signOut();
};

export const getUserInfo = async () => {
  return supabase.auth.getUser();
};

export const setUserAsAdmin = async () => {
  return supabase.auth.updateUser({
    data: { isAdmin: true },
  });
};
