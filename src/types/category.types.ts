export type Category = {
  id: string;
  name: string;
  createdAt: string; // ISO date string
};

export type UpdateCategoryFormValues = {
  name?: string;
};

export type CreateCategoryFormValues = {
  name: string;
};

export type CategoryPayload = {
  name: string;
};
