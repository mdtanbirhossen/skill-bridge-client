import { apiFetchClient } from "@/lib/api.client";
import { bookingPayload } from "@/types/booking.types";

export const bookingClientService = {
  createBooking: (data: bookingPayload) =>
    apiFetchClient("/booking", {
      method: "POST",
      body: JSON.stringify(data),
    }),

  updateBookingStatus: (bookingId: string, status: string) =>
    apiFetchClient(`/booking/${bookingId}`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    }),
};
