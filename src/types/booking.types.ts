import { Tutor } from "./tutor.types";
import { User } from "./user.types";

export const BOOKING_STATUSES = [
  "CONFIRMED",
  "COMPLETED",
  "CANCELLED",
] as const;


export enum BookingStatus {
  CONFIRMED = "CONFIRMED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}

export type bookingPayload = {
  date: string;
  startTime: string;
  endTime: string;
  tutorId: string;
};

export type Booking = {
  id: string;
  status: BookingStatus;
  date: string;
  startTime: string;
  endTime: string;

  studentId: string;
  tutorId: string;
  tutor?: Tutor;
  student?: User;

  createdAt: string;
  updatedAt: string;
};

export type CreateBookingFormValues = {
  date: string; // ISO date string (YYYY-MM-DD)
  startTime: string; // "10:00"
  endTime: string; // "11:00"
};
