import { Availability } from "./availability.types";
import { Review } from "./review.types";
import { User } from "./user.types";

export type TutorProfile = {
  id: string;
  bio: string;
  hourlyRate: number;
  experience: number;
  rating: number;
  subjects: string[];

  userId: string;
  categoryId: string;

  createdAt: string;
  updatedAt: string;
};

export type Tutor = {
  id: string;
  bio: string;
  hourlyRate: number;
  experience: number;
  rating: number;
  subjects: string[];
  user: User;
  availability?: Availability[];
  reviews?: Review[];
  category: {
    name: string;
  };
};

export type CreateTutorProfilePayload = {
  bio: string;
  hourlyRate: number;
  experience: number;
  subjects: string[];
  categoryId: string;
};

export type UpdateTutorProfilePayload = Partial<CreateTutorProfilePayload>;

export type TutorProfileFormValues = {
  bio: string;
  hourlyRate: number;
  experience: number;
  subjects: string[];
  categoryId: string;
};

export type GetTutorParams = {
  search?: string;
  category?: string;
  sortBy?: "hourlyRate" | "rating";
  sortOrder?: "asc" | "desc";
  page?: number;
  limit?: number;
};
