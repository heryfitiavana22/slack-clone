import { Workspace } from 'src/graphql-request';
import { create } from 'zustand';

type WorkspaceStore = Workspace & {
  setWorkspace: (workspace: Workspace) => void;
};

export const useWorkspace = create<WorkspaceStore>((set) => ({
  id: 0,
  name: '',
  createdAt: '',
  updatedAt: '',
  setWorkspace(workspace) {
    set(workspace);
  },
}));
