import { apiFetchClient } from "@/lib/api.client";
import { apiFetchServer } from "@/lib/api.server";
import { JwtUserPayload } from "@/types/user.types";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";
export const authService = {
  getMe: () => apiFetchServer("/auth/me"),
  
  signUp: (payload: {
    name: string;
    email: string;
    password: string;
    role: string;
    image?: string;
  }) =>
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

  getSession: async (): Promise<JwtUserPayload | null> => {
    const cookieStore = await cookies();
    const tokenCookie = cookieStore.get("token");

    if (!tokenCookie) return null;

    try {
      const decoded = jwt.verify(
        tokenCookie.value,
        process.env.JWT_SECRET!,
      ) as JwtUserPayload;

      return decoded;
    } catch (err) {
      console.log("JWT invalid or expired:", err);
      return null;
    }
  },
};
