import { useQuery } from "@tanstack/react-query";
import { getUserInfo } from "../../auth/user";

export const useUserInfo = () => {
  return useQuery({
    queryKey: ["get", "user-info"],
    queryFn: getUserInfo,
  });
};
