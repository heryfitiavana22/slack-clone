import { PropsWithChildren } from 'react';
import { Button } from 'src/app/components/button/button';
import { AuthenticatedGuard } from 'src/app/components/guard/authenticated-guard';
import { Input } from 'src/app/components/input/input';
import { MultiCreatable } from 'src/app/components/select/multi-creatable';
import { H2 } from 'src/app/components/typography/typography';
import { useCreateWorkspace } from './use-create-workspace';
import { Loading } from 'src/app/components/loading/loading';

export function CreateWorkspace({}: CreateWorkspaceProps) {
  const {
    workspace,
    setEmailsUsers,
    setWorkspace,
    errorMessage,
    loading,
    onSubmit,
  } = useCreateWorkspace();

  return (
    <AuthenticatedGuard>
      <div className="bg-primary-60 min-h-screen flex flex-col text-whit items-center p-4">
        <div className="space-y-6">
          <div className="space-y-2 text-center">
            <H2 className="font-bold">Nouvel espace de travail</H2>
            <p className="text-gray-500 dark:text-gray-400">
              Saisissez le nom de votre nouvel espace de travail et les
              utilisateurs que vous souhaitez inviter.
            </p>
          </div>
          <div className="space-y-2">
            <div className="space-y-2">
              <Input
                id="workspace-name"
                labelClassName="font-bold"
                label="Nom du Workspace"
                placeholder="my-team"
                value={workspace}
                onChange={(e) => setWorkspace(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <MultiCreatable
                label="Utilisateurs à inviter"
                labelClassName="font-bold"
                id="users"
                placeholder="example@gmail.com"
                onChange={(emails) => setEmailsUsers(emails)}
              />
            </div>
            {errorMessage && <p className="text-red-500">{errorMessage}</p>}
            <Button onClick={onSubmit}>Create Workspace</Button>
          </div>
        </div>
      </div>
      {loading && <Loading />}
    </AuthenticatedGuard>
  );
}

type CreateWorkspaceProps = PropsWithChildren<{}>;
