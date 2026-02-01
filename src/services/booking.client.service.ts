import { apiFetchClient } from "@/lib/api.client";
import { bookingPayload } from "@/types/booking.types";
import { CreateTutorProfilePayload } from "@/types/tutor.types";

export const bookingService = {
  createBooking: (data: bookingPayload) =>
    apiFetchClient("/booking", {
      method: "POST",
      body: JSON.stringify(data),
    }),
};
