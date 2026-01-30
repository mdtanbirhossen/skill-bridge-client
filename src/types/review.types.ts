export type Review = {
  id: string;
  rating: number; // 1–5
  comment?: string | null;

  studentId: string;
  tutorId: string;
  bookingId: string;

  createdAt: string; // ISO date string
};

export type CreateReviewPayload = {
  rating: number;
  comment?: string;
  tutorId: string; // from booking / page params
  bookingId: string; // from booking details
};

export type CreateReviewFormValues = {
  rating: number; // REQUIRED (1–5)
  comment?: string; // OPTIONAL
};
