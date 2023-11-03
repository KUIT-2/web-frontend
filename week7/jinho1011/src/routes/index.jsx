import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./Home";
import Products from "./Products";
import Product from "./Product";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<Product />} />
    </Routes>
  );
};

export default Router;
