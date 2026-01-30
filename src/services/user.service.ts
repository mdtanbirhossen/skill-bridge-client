import { apiFetchServer } from "@/lib/api.server";
import { JwtUserPayload } from "@/types/user.types";
import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

export const userService = {
  getMe: () => apiFetchServer("/auth/me"),
  getSession: async (): Promise<JwtUserPayload | null> => {
    const cookieStore = await cookies();
    const tokenCookie = cookieStore.get("token");

    if (!tokenCookie) return null;

    try {
      const decoded = jwt.verify(
        tokenCookie.value,
        process.env.JWT_SECRET as string,
      ) as JwtUserPayload;

      return decoded;
    } catch (err) {
      console.log("JWT invalid or expired:", err);
      return null;
    }
  },
};
