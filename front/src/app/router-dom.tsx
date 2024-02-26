import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { Channel } from './channel/channel';
import { Login } from './auth/login/login';
import { MainLayout } from './components/layout/main-layout';
import { ROUTES } from './routes';
import { Signup } from './auth/signup/signup';
import { CreateWorkspace } from './workspace/create/create-workspace';
import { ListWorkspace } from './workspace/list-workspace/list-workspace';

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
      { index: true, element: <Navigate to={ROUTES.channel('0')} /> },
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
