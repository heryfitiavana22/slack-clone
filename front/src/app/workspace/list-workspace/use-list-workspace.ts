import { useMyWorkspacesQuery } from 'src/graphql-request';

export function useListWorkspace() {
  const { data, loading } = useMyWorkspacesQuery();
  return {
    data: data,
    loading,
  };
}
