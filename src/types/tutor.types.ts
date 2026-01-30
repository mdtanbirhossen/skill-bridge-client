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

export type TutorProfileFormValues = {
  bio: string;
  hourlyRate: number;
  experience: number;
  subjects: string[];
  categoryId: string;
};
