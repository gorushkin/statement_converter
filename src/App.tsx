import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import { IndexPage } from './pages/Index';

enum Route {
  ROOT = '/',
  TABLE = '/table',
  STATEMENT = '/statement',
}

const router = createBrowserRouter([
  {
    path: Route.ROOT,
    element: <IndexPage />,
  },
  {
    path: Route.STATEMENT,
    element: <div>About</div>,
  },
]);

export const App = () => <RouterProvider router={router} />;
