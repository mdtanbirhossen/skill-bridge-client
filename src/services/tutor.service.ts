import { apiFetchServer } from "@/lib/api.server";
import {
  CreateTutorProfilePayload,
  GetTutorParams,
  UpdateTutorProfilePayload,
} from "@/types/tutor.types";



export const tutorService = {
  createTutor: (data: CreateTutorProfilePayload) =>
    apiFetchServer("/tutor", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  getAllTutors: (params?: GetTutorParams) => {
    const query = new URLSearchParams();

    if (params?.search) query.append("search", params.search);
    if (params?.category) query.append("category", params.category);
    if (params?.sortBy) query.append("sortBy", params.sortBy);
    if (params?.sortOrder) query.append("sortOrder", params.sortOrder);
    if (params?.page) query.append("page", String(params.page));
    if (params?.limit) query.append("limit", String(params.limit));

    return apiFetchServer(`/tutor?${query.toString()}`);
  },

  getTutorById: (id: string) => apiFetchServer(`/tutor/${id}`),
  upsertTutor: (data: UpdateTutorProfilePayload) =>
    apiFetchServer(`/tutor/profile`, {
      method: "PUT",
      body: JSON.stringify(data),
    }),
  deleteTutor: () => apiFetchServer(`/tutor`, { method: "DELETE" }),
};
