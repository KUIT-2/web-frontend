import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const Router = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/store",
      element: <Stores />,
    },
    {
      path: "/store/:storeId",
      element: <Store />,
    },
    {
      path: "/cart",
      element: <Cart />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default Router;
