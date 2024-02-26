export const ROUTES = {
  none: () => '',
  home: () => '/',
  login: () => '/login',
  signup: () => '/signup',
  workspace: (id: ParamsId) => `/workspace/${id}`,
  channel: (channelId: ParamsId) => `ch/${channelId}`,
  createWorkspace: () => `/workspace/create`,
  workspaceWithChannel: (workspaceId: ParamsId, channelId: ParamsId) =>
    `/workspace/${workspaceId}/ch/${channelId}`,
};

type ParamsId = string | number;
