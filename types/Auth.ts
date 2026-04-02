import { DefaultSession } from "next-auth";

export interface ILogin {
  email: string;
  password: string;
}

export interface UserExtended {
  id: string;
  name: string;
  email: string;
  department: string;
  roles: string;
  customer: string[];
  accessToken: string;
}

export interface JWTExtended {
  user: UserExtended;
  [key: string]: unknown;
}

export interface SessionExtended {
  user: UserExtended;
  accessToken: string;
  expires: string;
}

// Extend NextAuth default types
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: UserExtended;
    accessToken: string;
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    user: UserExtended;
  }
}