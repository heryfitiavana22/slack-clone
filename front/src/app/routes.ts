export const ROUTES = {
  none: () => '',
  home: () => '/',
  login: () => '/login',
  signup: () => '/signup',
  workspace: (id: string) => `/workspace/${id}`,
};
