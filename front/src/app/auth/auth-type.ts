export type Token = {
    access_token: string;
};

export type Login = {
    email: string;
    password: string;
};

export type AuthStatus = "unknown" | "guest" | "authenticated";
export type UserAuth =
    | {
          id: number;
          name: string;
          email: string;
      }
    | null
    | undefined;
