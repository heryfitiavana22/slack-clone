import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from 'src/app/auth/use-auth';
import { Loading } from '../loading/loading';
import { ROUTES } from 'src/app/routes';

export function AuthenticatedGuard({ children }: AuthenticatedGuardProps) {
  const { status } = useAuth();

  if (status == 'unknown') return <Loading />;

  if (status == 'guest') return <Navigate to={ROUTES.login()} />;

  return <>{children}</>;
}

type AuthenticatedGuardProps = PropsWithChildren<{}>;
