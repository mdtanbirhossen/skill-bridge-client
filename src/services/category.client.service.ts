import { apiFetchClient } from "@/lib/api.client";
import { CategoryPayload } from "@/types/category.types";

export const categoryClientService = {
  updateCategoryById: (categoryId: string, payload: CategoryPayload) =>
    apiFetchClient(`/category/${categoryId}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
    }),
};
