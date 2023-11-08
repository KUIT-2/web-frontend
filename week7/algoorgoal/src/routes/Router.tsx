import React from 'react';
import { Link, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Products from './Products';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
    },
    {
      path: '/products',
      element: <Products />,
    },
  ]);

  return <RouterProvider router={router} />;
}
