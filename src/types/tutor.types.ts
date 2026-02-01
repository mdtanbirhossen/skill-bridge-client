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
  user: {
    name: string;
    email: string;
    image: string | null;
  };
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