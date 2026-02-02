import { apiFetchServer } from "@/lib/api.server";

export const availabilityServerService = {
  getMyAvailability: () => apiFetchServer("/availability/me"),
};
