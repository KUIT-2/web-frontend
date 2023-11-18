import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './Home';
import Stores from './Stores';
import Store from './Store';
import Cart from './Cart';
import Order from './Order';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      children: [
        {
          index: true,
          element: <Home />,
        },
      ],
    },
    {
      path: '/store',
      element: <Stores />,
    },
    {
      path: '/stores/:storeId',
      element: <Store />,
    },
    {
      path: '/cart',
      element: <Cart />,
    },
    {
      path: '/order',
      element: <Order />,
    },
  ]);

  return <RouterProvider router={router} />;
}
