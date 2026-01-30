import { apiFetchServer } from "@/lib/api.server";


export const userService = {
  getSession: async () => {
    try {
      const res = await apiFetchServer("/auth/me");

      if (!res.ok) {
        return {
          data: null,
          error: { message: res.message || "Session missing" },
        };
      }

      return {
        data: res.data,
        error: null,
      };
    } catch (error) {
      console.error(error);
      return {
        data: null,
        error: { message: "Something went wrong" },
      };
    }
  },
};
