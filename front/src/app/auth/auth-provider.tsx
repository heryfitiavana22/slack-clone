import { PropsWithChildren, useEffect } from 'react';
import { useAuth } from './use-auth';
import { useMeQuery } from 'src/graphql-request';

export function AuthProvider({ children }: AuthProviderProps) {
  const { error, data } = useMeQuery();
  const { setUser } = useAuth();
  // console.log(data);

  useEffect(() => {
    if (data?.me) return setUser(data.me);
    if (error) return setUser(null);
  }, [data, error]);

  if (error?.message == 'Failed to fetch')
    return <p>Error, server not running : {error?.message}</p>;

  return <>{children}</>;
}

type AuthProviderProps = PropsWithChildren<{}>;
