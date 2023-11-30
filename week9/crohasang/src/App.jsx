import React, { useEffect } from "react";
import { Normalize } from "styled-normalize";
import Router from "./pages";
import GlobalStyle from "./GlobalStyle";
import useCartStore from "./store/cartStore";

function App() {
  const fetchCart = useCartStore((state) => state.fetchCart);

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <>
      <GlobalStyle />
      <Normalize />
      <Router />
    </>
  );
}

export default App;
