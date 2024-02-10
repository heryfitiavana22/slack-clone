import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'src/app/auth/use-auth';
import { ROUTES } from 'src/app/routes';
import { useCreatWorkspaceMutation } from 'src/graphql-request';

export function useCreateWorkspace() {
  const { user } = useAuth();
  const [errorMessage, setErrorMessage] = useState('');
  const [workspace, setWorkspace] = useState('');
  const [emailsUsers, setEmailsUsers] = useState<string[]>([]);
  const [createWorskpace, { error, loading }] = useCreatWorkspaceMutation();
  const navigate = useNavigate();

  return {
    workspace,
    emailsUsers,
    loading,
    error,
    errorMessage,
    setEmailsUsers,
    setWorkspace,
    onSubmit: async () => {
      try {
        if (workspace.length == 0)
          return setErrorMessage('Entrer un nom pour le workspace');
        const emails = [...emailsUsers];
        if (user) emails.push(user.email);

        const response = await createWorskpace({
          variables: {
            name: workspace,
            usersEmails: emails,
          },
        });
        if (response.data) {
          return navigate(ROUTES.workspace(response.data.createWorkspace.id));
        }
      } catch (error) {
        setErrorMessage('Workspace déjà existant ou un des email est invalide');
      }
    },
  };
}
