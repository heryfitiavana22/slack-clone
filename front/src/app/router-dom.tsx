import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Channel } from './channel/channel';
import { Login } from './auth/login/login';
import { MainLayout } from './components/layout/main-layout';
import { ROUTES } from './routes';
import { Signup } from './auth/signup/signup';
import { CreateWorkspace } from './workspace/create/create-workspace';
import { ListWorkspace } from './workspace/list-workspace/list-workspace';
import { RedirectToRandom } from './channel/redirect-to-random';

const router = createBrowserRouter([
  {
    path: ROUTES.home(),
    element: <ListWorkspace />,
  },
  {
    path: ROUTES.createWorkspace(),
    element: <CreateWorkspace />,
  },
  {
    path: ROUTES.workspace(':workspaceId'),
    element: <MainLayout />,
    children: [
      { index: true, element: <RedirectToRandom /> },
      { path: ROUTES.channel(':channelId'), element: <Channel /> },
    ],
  },
  {
    path: ROUTES.login(),
    element: <Login />,
  },
  {
    path: ROUTES.signup(),
    element: <Signup />,
  },
]);

export function RouterDom() {
  return <RouterProvider router={router} />;
}
