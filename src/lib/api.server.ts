import { cookies } from "next/headers";

export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiFetchServer(
  endpoint: string,
  options?: RequestInit
) {
  const cookieStore = await cookies();

  const cookieHeader = cookieStore
    .getAll()
    .map(c => `${c.name}=${c.value}`)
    .join("; ");

  const res = await fetch(`${API_URL}${endpoint}`, {
    headers: {
      "Content-Type": "application/json",
      Cookie: cookieHeader,
      ...(options?.headers || {}),
    },
    cache: "no-store",
    ...options,
  });

  const data = await res.json().catch(() => null);

  return {
    ok: res.ok,
    status: res.status,
    data,
    message: data?.message,
  };
}
