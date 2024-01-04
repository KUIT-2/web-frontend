import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './ErrorPage';
import Home from './Home';
import Products from './Products';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: '/products',
      element: <Products />,
    },
  ]);

  return <RouterProvider router={router} />;
}
