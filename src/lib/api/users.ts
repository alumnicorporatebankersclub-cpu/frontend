import { api } from "@/lib/axios";
import type { CreateUserInput, User } from "@/types/user";

export async function getUsers(): Promise<User[]> {
  const { data } = await api.get<User[]>("/users");
  return data;
}

export async function createUser(input: CreateUserInput): Promise<User> {
  const { data } = await api.post<User>("/users", input);
  return data;
}
