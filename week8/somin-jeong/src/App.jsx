import React, { useEffect } from "react";
import Router from "./pages";
import { Normalize } from "styled-normalize";
import './App.css';
import GlobalStyle from "./pages/GlobalStyle";
import useCartStore from "./store/cartStore";

function App() {
  const fetchCart = useCartStore((state) => state.fetchCart);

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <>
      <Normalize />
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;