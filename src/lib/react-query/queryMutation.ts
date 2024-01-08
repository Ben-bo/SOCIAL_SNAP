import { useMutation } from "@tanstack/react-query";
import { createUserAccount, signInAccount } from "../appwrite/api";
import { INewUser } from "@/types";

export const useCreateAccountMutation = () => {
  return useMutation({
    // mutateAsync
    mutationFn: (user: INewUser) => createUserAccount(user),
  });
};
export const useSignInMutation = () => {
  return useMutation({
    // mutateAsync
    mutationFn: (user: { email: string; password: string }) =>
      signInAccount(user),
  });
};
