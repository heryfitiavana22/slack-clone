import { PropsWithChildren, useEffect } from 'react';
import { useMatch } from 'react-router-dom';
import { useAmIInWorkspaceQuery } from 'src/graphql-request';
import { Loading } from '../loading/loading';
import { useWorkspace } from 'src/app/workspace/use-workspace';

export function WorkspaceGuard({ children }: WorkspaceGuardProps) {
  const match = useMatch('/workspace/:id/*');
  const workspaceId = Number(match?.params.id) || 1;
  const { id, setWorkspace } = useWorkspace();
  const { data, loading, error } = useAmIInWorkspaceQuery({
    variables: { workspaceId },
  });

  useEffect(() => {
    if (data && data.amIInWorkspace) setWorkspace(data.amIInWorkspace);
  }, [data]);

  if (loading || id == 0) return <Loading />;

  if (error) return <div>Workspace indisponible</div>;

  return <>{children}</>;
}

type WorkspaceGuardProps = PropsWithChildren<{}>;
