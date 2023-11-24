import React, { useEffect } from 'react';

import { Normalize } from 'styled-normalize';
import { ThemeProvider } from 'styled-components';
import Router from './pages';
import theme from './common/styles/theme';
import GlobalStyle from './common/styles/GlobalStyle';
import useCartStore from './store/cartStore';

function App() {
  return (
    <>
      <Normalize />
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <Router />
      </ThemeProvider>
    </>
  );
}

export default App;
