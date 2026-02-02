import { apiFetchClient } from "@/lib/api.client";
import {
  CreateTutorProfilePayload,
  UpdateTutorProfilePayload,
} from "@/types/tutor.types";

export const tutorClientService = {
  createTutor: (data: CreateTutorProfilePayload) =>
    apiFetchClient("/tutor", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  upsertTutor: (data: UpdateTutorProfilePayload) =>
    apiFetchClient(`/tutor/profile`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  deleteTutor: () => apiFetchClient(`/tutor`, { method: "DELETE" }),
};
