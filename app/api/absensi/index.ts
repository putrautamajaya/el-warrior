import supabase from "@/app/config/supabase";
import { useMutation, useQuery } from "@tanstack/react-query";
import dayjs from "dayjs";

interface IUpdateAbsensiParams {
  user_id: string;
}

export const updateAbsensi = async (user_id: string) => {
  return supabase
    .from("absensi")
    .insert({ created_at: dayjs().toISOString(), user_id })
    .select();
};

export const useMutateAbsensi = () => {
  return useMutation({
    mutationFn: ({ user_id }: IUpdateAbsensiParams) => updateAbsensi(user_id),
  });
};

export const getAbsensi = async (user_id: string) => {
  return supabase.from("absensi").select("*").eq("user_id", user_id); // Correct
};

export const useAbsensi = (user_id?: string) => {
  return useQuery({
    queryKey: ["get", "absensi-list"],
    queryFn: () => getAbsensi(user_id!),
    enabled: !!user_id,
  });
};
