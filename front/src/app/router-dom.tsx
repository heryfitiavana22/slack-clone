import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Channel } from './channel/channel';
import { Login } from './auth/login/login';
import { MainLayout } from './components/layout/main-layout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [{ index: true, element: <Channel /> }],
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export function RouterDom() {
  return <RouterProvider router={router} />;
}
