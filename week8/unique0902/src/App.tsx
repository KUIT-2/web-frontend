import Router from './pages';
import { Normalize } from 'styled-normalize';
import React, { useEffect } from 'react';
import GlobalStyles from './styles/GlobalStyle';
import { getStore } from './models/store';
import useCartStore from './api/cartStore';
const App: React.FC = () => {
  const fetchCart = useCartStore((state) => state.fetchCart);

  useEffect(() => {
    fetchCart();
  }, []);
  return (
    <>
      <Normalize />
      <GlobalStyles />
      <Router />
    </>
  );
};

export default App;
