import React, { useEffect } from "react";
import { Normalize } from "styled-normalize";
import Router from "./pages";
import useCartStore from "./store/cartStore";
import "./App.css";

function App() {
  const fetchCart = useCartStore((state) => state.fetchCart);

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <>
      <Normalize />
      <Router />
    </>
  );
}

export default App;
