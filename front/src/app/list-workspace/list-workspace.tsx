import { Button } from '../components/button/button';
import { H1, H3 } from '../components/typography/typography';
import { AppIcon } from '../components/icons/app-icon';
import { WorkspaceItem } from './components/workspace-item';

export function ListWorkspace({}: ListWorkspaceProps) {
  return (
    <div className="bg-primary-600 min-h-screen flex flex-col items-center text-white p-4">
      <header className="w-full max-w-7xl mx-auto flex justify-between items-center py-4">
        <div className="flex items-center space-x-4">
          <AppIcon className="h-8 w-8" />
        </div>
        <div className="flex items-center space-x-4">
          <Button className="" variant="secondary">
            CREÉR UN WORKSPACE
          </Button>
        </div>
      </header>
      <main className="w-full max-w-6xl mx-auto">
        <H1 className="font-bold mb-12">Bienvenu sur Slack Clone</H1>
        <div className="bg-white text-black rounded-lg shadow-lg flex flex-col space-y-4">
          <H3 className="font-semibold bg-primary-100 p-6 rounded-t-lg">
            Espace de travail :
          </H3>
          <WorkspaceItem workspace={{ name: 'hery-dj', members: 2 }} />
          <WorkspaceItem workspace={{ name: 'example-dj', members: 3 }} />
        </div>
        <div className="flex flex-col items-center mt-12">
          <div className="text-center">
            <p className="mb-2">
              Vous souhaitez utiliser Slack avec une autre équipe ?
            </p>
            <Button variant="secondary">CREÉR UN WORKSPACE</Button>
          </div>
        </div>
      </main>
    </div>
  );
}

type ListWorkspaceProps = {};
