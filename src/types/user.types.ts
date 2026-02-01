export interface JwtUserPayload {
  id: string;
  email: string;
  name: string;
  role: Role;
  status: string;
  iat: number;
  exp: number;
}

export type CreateUserInput = {
  name: string;
  email: string;
  password: string;
  role?: string;
  phone?: string;
  image?: string;
  emailVerified?: boolean;
  isBanned?: boolean;
};

export enum Role {
  STUDENT = "STUDENT",
  TUTOR = "TUTOR",
  ADMIN = "ADMIN",
}

export type User = {
  name: string;
  email: string;
  role?: Role;
  phone?: string;
  image?: string;
  emailVerified?: boolean;
  isBanned?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
