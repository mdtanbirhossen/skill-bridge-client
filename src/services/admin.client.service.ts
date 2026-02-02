import { apiFetchClient } from "@/lib/api.client";
import { Role } from "@/types/user.types";

export const adminClientService = {
  updateUserById: (
    userId: string,
    payload: { isBanned?: boolean; role?: Role },
  ) =>
    apiFetchClient(`/user/${userId}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
    }),
};
