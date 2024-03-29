import { Button } from 'src/app/components/button/button';
import { AuthenticatedGuard } from 'src/app/components/guard/authenticated-guard';
import { AppIcon } from 'src/app/components/icons/app-icon';
import { H1, H3 } from 'src/app/components/typography/typography';
import { ROUTES } from 'src/app/routes';
import { WorkspaceItem } from './components/workspace-item';
import { Link } from 'react-router-dom';
import { useListWorkspace } from './use-list-workspace';
import { Loading } from 'src/app/components/loading/loading';

export function ListWorkspace({}: ListWorkspaceProps) {
  const { data, loading } = useListWorkspace();

  if (loading) return <Loading />;

  return (
    <AuthenticatedGuard>
      <div className="bg-primary-600 min-h-screen flex flex-col items-center text-white p-4">
        <header className="w-full max-w-7xl mx-auto flex justify-between items-center py-4">
          <div className="flex items-center space-x-4">
            <AppIcon className="h-8 w-8" />
          </div>
          <div className="flex items-center space-x-4">
            <Link to={ROUTES.createWorkspace()}>
              <Button variant="secondary">CREÉR UN WORKSPACE</Button>
            </Link>
          </div>
        </header>
        <main className="w-full max-w-6xl mx-auto">
          <H1 className="font-bold mb-12">Bienvenu sur Slack Clone</H1>
          <div className="bg-white text-black rounded-lg shadow-lg flex flex-col space-y-4">
            <H3 className="font-semibold bg-primary-100 p-6 rounded-t-lg">
              Espace de travail :
            </H3>
            {data &&
              data.myWorkspaces.map((workspace) => (
                <WorkspaceItem
                  workspace={{
                    id: workspace?.id,
                    name: workspace?.name,
                    members: 2,
                  }}
                  key={workspace?.id}
                />
              ))}
          </div>
          <div className="flex flex-col items-center mt-12">
            <div className="text-center">
              <p className="mb-2">
                Vous souhaitez utiliser Slack avec une autre équipe ?
              </p>
              <Link to={ROUTES.createWorkspace()}>
                <Button variant="secondary">CREÉR UN WORKSPACE</Button>
              </Link>
            </div>
          </div>
        </main>
      </div>
    </AuthenticatedGuard>
  );
}

type ListWorkspaceProps = {};
