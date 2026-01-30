import { apiFetchClient } from "@/lib/api.client";
import { apiFetchServer } from "@/lib/api.server";

export const adminService = {
  getAllUsers: () => apiFetchServer("/user"),
  getAllBookings: () => apiFetchServer("/booking"),
  getAllCategories: () => apiFetchServer("/category"),
  
};
