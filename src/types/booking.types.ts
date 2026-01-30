export enum BookingStatus {
  CONFIRMED = "CONFIRMED",
  COMPLETED = "COMPLETED",
  CANCELLED = "CANCELLED",
}


export type Booking = {
  id: string;
  status: BookingStatus;
  date: string;
  startTime: string;
  endTime: string;

  studentId: string;
  tutorId: string;

  createdAt: string;
  updatedAt: string;
};

export type CreateBookingFormValues = {
  date: string;        // ISO date string (YYYY-MM-DD)
  startTime: string;   // "10:00"
  endTime: string;     // "11:00"
};
