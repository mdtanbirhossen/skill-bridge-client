import { apiFetchServer } from "@/lib/api.server";
import { bookingPayload } from "@/types/booking.types";

export const bookingServerService = {
  getAllBookings: () => apiFetchServer("/booking"),
  getBookingById: (id: string) => apiFetchServer(`/booking/${id}`),
};
