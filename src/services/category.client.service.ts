import { apiFetchClient } from "@/lib/api.client";
import { CategoryPayload } from "@/types/category.types";

export const categoryClientService = {
  createCategory: (payload: CategoryPayload) =>
    apiFetchClient(`/category`, {
      method: "POST",
      body: JSON.stringify(payload),
    }),
  updateCategoryById: (categoryId: string, payload: CategoryPayload) =>
    apiFetchClient(`/category/${categoryId}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
    }),
};
