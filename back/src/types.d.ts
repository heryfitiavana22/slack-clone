import { User } from './graphql';
import { Express, Request } from 'express';

namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URL: string;
    ACCESS_TOKEN_SECRET: string;
    REFRESH_TOKEN_SECRET: string;
  }
}

namespace Express {
  interface Request {
    user: User;
  }
}
