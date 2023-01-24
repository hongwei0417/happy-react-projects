import Home from '@/pages/home';
import { useRoutes } from 'react-router-dom';

export const AppRoutes = () => {
  const routes = useRoutes([
    {
      path: '/',
      element: <Home />
    }
  ])

  return routes
}