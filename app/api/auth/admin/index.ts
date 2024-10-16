import supabaseAdmin from "@/app/config/supabase/admin";

export const getUsersList = async () => {
  return supabaseAdmin.auth.admin.listUsers();
};

export const getUserById = async (userId: string) => {
    return supabaseAdmin.auth.admin.getUserById(userId)
}

export const updateUserMetadata = async (userId: string, metadata: object) => {
  return supabaseAdmin.auth.admin.updateUserById(userId, {
    user_metadata: metadata,
  });
};
