import { Link } from 'react-router-dom';
import { Button } from 'src/app/components/button/button';
import { H6 } from 'src/app/components/typography/typography';
import { ROUTES } from 'src/app/routes';

export function WorkspaceItem({ workspace }: WorkspaceItemProps) {
  return (
    <div className="flex items-center space-x-4 py-4 px-6">
      <div className="flex-grow">
        <H6 className="font-semibold">{workspace.name}</H6>
        <div className="flex items-center space-x-1">
          <span className="text-sm">{workspace.members} membres</span>
        </div>
      </div>
      <Link to={ROUTES.workspace(workspace.id || 0)}>
        <Button>Lancer</Button>
      </Link>
    </div>
  );
}

type WorkspaceItemProps = {
  workspace: {
    id?: number;
    name?: string;
    members?: number;
  };
};
