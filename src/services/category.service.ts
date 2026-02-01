import { apiFetchServer } from "@/lib/api.server";

export const categoryService = {
  getAllCategories: () => apiFetchServer("/category"),
  
};
