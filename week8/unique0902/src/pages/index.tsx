import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './Home/Home';
import Stores from './Stores/Stores';
import Store from './Store/Store';
import Cart from './Cart/Cart';
import Root from './Root/Root';

const Router = () => {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: '/store',
          element: <Stores />,
        },
        {
          path: '/store/:storeId',
          element: <Store />,
        },
      ],
    },
    {
      path: '/cart',
      element: <Cart />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
