import { create } from 'zustand';
import { UserAuth, AuthStatus } from './auth-type';
import { useMeQuery } from 'src/graphql-request';
import { useEffect } from 'react';

type AuthStore = {
  user: UserAuth;
  status: AuthStatus;
  setUser: (user: UserAuth) => void;
};

const useAuthStore = create<AuthStore>((set) => {
  return {
    user: undefined,
    status: 'unknown',
    setUser: (user: UserAuth) => set({ user, status: authStatusFactory(user) }),
  };
});

export function useAuth() {
  const { user, status, setUser } = useAuthStore();
  const { error, data, refetch } = useMeQuery();

  useEffect(() => {
    if (data?.me) return setUser(data.me);
    if (error) return setUser(null);
  }, [data, error]);

  return {
    user,
    status,
    error,
    setUser,
    refetchUser: () => {
      refetch();
    },
  };
}

export function authStatusFactory(user: UserAuth) {
  let authStatus: AuthStatus;
  switch (user) {
    case undefined:
      authStatus = 'unknown';
      break;
    case null:
      authStatus = 'guest';
      break;
    default:
      authStatus = 'authenticated';
      break;
  }
  return authStatus;
}
