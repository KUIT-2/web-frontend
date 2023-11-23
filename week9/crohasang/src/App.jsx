import Router from "./pages";
import { Normalize } from "styled-normalize";
import GlobalStyle from "./GlobalStyle";
import { useEffect } from "react";
import { getStore } from "./apis/stores";
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
