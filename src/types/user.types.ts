export interface JwtUserPayload {
  id: string;
  role: string;
  email: string;
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

export type User = {
  name: string;
  email: string;
  password: string;
  role?: string;
  phone?: string;
  image?: string;
  emailVerified?: boolean;
  isBanned?: boolean;
  createdAt?: string;
  updatedAt?: string;
};
