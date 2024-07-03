import { Request } from 'express'

// include user on express Request
declare module 'express' {
  interface Request {
    user?: {
      id: string;
      name: string;
      email: string;
      role: string;
    };
  }
}