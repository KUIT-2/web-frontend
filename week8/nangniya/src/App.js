import React, { useEffect } from 'react';
import { Normalize } from 'styled-normalize';
import { createGlobalStyle } from 'styled-components';
import Router from './pages';

import useCartStore from './store/cartStore';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  p, h3, h1{
    margin: 0;
  }
`;

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
