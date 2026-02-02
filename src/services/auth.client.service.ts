import { apiFetchClient } from "@/lib/api.client";
import { CreateUserInput, UpdateUserPayload } from "@/types/user.types";

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

  updateUser: (userId: string, payload: UpdateUserPayload) =>
    apiFetchClient(`/auth/${userId}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
    }),
};
