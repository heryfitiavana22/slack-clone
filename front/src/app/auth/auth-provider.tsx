import { PropsWithChildren } from 'react';
import { useAuth } from './use-auth';

export function AuthProvider({ children }: AuthProviderProps) {
  const { error } = useAuth();

  if (error?.message == 'Failed to fetch')
    return <p>Error, server not running : {error?.message}</p>;

  return <>{children}</>;
}

type AuthProviderProps = PropsWithChildren<{}>;
