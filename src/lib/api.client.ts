export const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function apiFetchClient(
  endpoint: string,
  options?: RequestInit
) {
  console.log("API_URL:", API_URL);
  const res = await fetch(`${API_URL}${endpoint}`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      authorization: `Bearer ${localStorage.getItem("token")}`,
      ...(options?.headers || {}),
    },
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
