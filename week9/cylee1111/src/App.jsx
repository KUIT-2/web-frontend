import { useEffect } from "react";
import Router from "./pages";
import { Normalize } from "styled-normalize";
import useCartStore from "./store/cartStore";
import "./App.css"

function App() {
  const fetchCart = useCartStore(state => state.fetchCart);

  useEffect(() => {
    fetchCart();
  }, [])

  return (
    <>
      <Normalize />
      <Router />
    </>
  );
}

export default App;
