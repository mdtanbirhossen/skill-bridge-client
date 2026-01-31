import { apiFetchServer } from "@/lib/api.server";
import {
  CreateTutorProfilePayload,
  UpdateTutorProfilePayload,
} from "@/types/tutor.types";

export const tutorService = {
  createTutor: (data: CreateTutorProfilePayload) =>
    apiFetchServer("/tutor", {
      method: "POST",
      body: JSON.stringify(data),
    }),
  getAllTutors: () => apiFetchServer("/tutor"),
  getTutorById: (id: string) => apiFetchServer(`/tutor/${id}`),
  upsertTutor: (data: UpdateTutorProfilePayload) =>
    apiFetchServer(`/tutor/profile`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  deleteTutor: () => apiFetchServer(`/tutor`, { method: "DELETE" }),
};
