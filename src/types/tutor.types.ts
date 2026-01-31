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
