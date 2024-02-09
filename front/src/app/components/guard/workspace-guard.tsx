import { PropsWithChildren } from 'react';

export function WorkspaceGuard({ children }: WorkspaceGuardProps) {
  return <>{children}</>;
}

type WorkspaceGuardProps = PropsWithChildren<{}>;
