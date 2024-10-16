import { useQuery } from "@tanstack/react-query";
import { getUsersList } from "../../auth/admin";

const useUserList = () => {
  return useQuery({
    queryKey: ["get", "user-list"],
    queryFn: getUsersList,
  });
};

export default useUserList;
