import { apiFetchClient } from "@/lib/api.client";
import { CreateReviewPayload } from "@/types/review.types";

export const reviewClientService = {
  createReview: (data: CreateReviewPayload) =>
    apiFetchClient("/review", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};
