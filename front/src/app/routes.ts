export const ROUTES = {
  none: () => '',
  home: () => '/',
  login: () => '/login',
  signup: () => '/signup',
  workspace: (id: string | number) => `/workspace/${id}`,
  createWorkspace: () => `/workspace/create`,
};
