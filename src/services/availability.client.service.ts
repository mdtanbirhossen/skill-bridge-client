import { apiFetchClient } from "@/lib/api.client";
import { CreateAvailabilityPayload } from "@/types/availability.types";
export const availabilityClientService = {
  updateAvailabilityById: (
    availabilityId: string,
    payload: Partial<CreateAvailabilityPayload>,
  ) =>
    apiFetchClient(`/availability/${availabilityId}`, {
      method: "PUT",
      body: JSON.stringify(payload),
    }),
};
