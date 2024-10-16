import { useMutation } from "@tanstack/react-query";
import { updateUserMetadata } from "../../auth/admin";

const useMutationUserMetaData = () => {
  return useMutation({
    mutationFn: ({ userId, metadata }: { userId: string, metadata: object }) =>
      updateUserMetadata(userId, metadata),
  });
};

export default useMutationUserMetaData;
