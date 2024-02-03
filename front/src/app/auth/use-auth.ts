import { create } from "zustand";
import { UserAuth, AuthStatus } from "./auth-type";

type AuthStore = {
    user: UserAuth;
    status: AuthStatus;
    setUser: (user: UserAuth) => void;
};

export const useAuth = create<AuthStore>((set) => ({
    user: undefined,
    status: "unknown",
    setUser: (user: UserAuth) => set({ user, status: authStatusFactory(user) }),
}));

export function authStatusFactory(user: UserAuth) {
    let authStatus: AuthStatus;
    switch (user) {
        case undefined:
            authStatus = "unknown";
            break;
        case null:
            authStatus = "guest";
            break;
        default:
            authStatus = "authenticated";
            break;
    }
    return authStatus;
}
