
import { apiFetchServer } from "@/lib/api.server";

export const adminService = {
  getAllUsers: () => apiFetchServer("/user"),
};
