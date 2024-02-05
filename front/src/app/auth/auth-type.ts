import { User, LoginInput, CreateUserInput } from 'src/graphql-request';

export type Token = {
  access_token: string;
};

export type Login = LoginInput;

export type SignUp = CreateUserInput;

export type AuthStatus = 'unknown' | 'guest' | 'authenticated';
export type UserAuth = User | null | undefined;
