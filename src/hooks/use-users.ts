"use client";

import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { createUser, getUsers } from "@/lib/api/users";
import type { ApiError } from "@/types/api";
import type { CreateUserInput, User } from "@/types/user";

/** Query key factory – keeps keys consistent across queries and invalidations. */
export const userKeys = {
  all: ["users"] as const,
  lists: () => [...userKeys.all, "list"] as const,
  detail: (id: string) => [...userKeys.all, "detail", id] as const,
};

export function useUsers() {
  return useQuery<User[], ApiError>({
    queryKey: userKeys.lists(),
    queryFn: getUsers,
  });
}

export function useCreateUser() {
  const queryClient = useQueryClient();

  return useMutation<User, ApiError, CreateUserInput>({
    mutationFn: createUser,
    onSuccess: (user) => {
      toast.success(`${user.name} was created`);
      void queryClient.invalidateQueries({ queryKey: userKeys.lists() });
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
}
