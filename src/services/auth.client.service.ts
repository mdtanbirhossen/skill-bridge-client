import { apiFetchClient } from "@/lib/api.client";
import { CreateUserInput } from "@/types/user.types";

export const authClientService = {
  signUp: (payload: CreateUserInput) =>
    apiFetchClient("/auth/register", {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  signIn: (payload: { email: string; password: string }) =>
    apiFetchClient("/auth/login", {
      method: "POST",
      body: JSON.stringify(payload),
    }),

  logout: () =>
    apiFetchClient("/auth/logout", {
      method: "POST",
    }),
};
