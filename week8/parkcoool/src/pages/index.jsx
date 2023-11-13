import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "./Home/Home";
import Stores from "./Stores/Stores";
import Store from "./Store/Store";
import Cart from "./Cart/Cart";

import OrderBar from "../components/OrderBar/OrderBar";

const Router = () => {
    const router = createBrowserRouter([
        {
            path: "/",
            children: [
                {
                    index: true,
                    element: <Home />,
                },
                {
                    path: "/stores/:categoryId",
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
            ],
        },
    ]);

    return (
        <div>
            <RouterProvider router={router} />
            <OrderBar />
        </div>
    );
};

export default Router;
