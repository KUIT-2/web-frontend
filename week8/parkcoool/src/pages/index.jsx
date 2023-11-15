import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";

import Home from "./Home/Home";
import Stores from "./Stores/Stores";
import Store from "./Store/Store";
import Cart from "./Cart/Cart";

import OrderBar from "../components/OrderBar/OrderBar";
import Modal from "../components/Modal/Modal";

const Router = () => {
    return (
        <BrowserRouter>
            <OrderBar />
            <Modal />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/stores/:categoryId" element={<Stores />} />
                <Route path="/store/:storeId" element={<Store />} />
                <Route path="/cart" element={<Cart />} />
            </Routes>
        </BrowserRouter>
    );
};

export default Router;
