import Router from './pages';
import { Normalize } from 'styled-normalize';
import React from 'react';
import GlobalStyles from './styles/GlobalStyle';
const App: React.FC = () => {
  return (
    <>
      <Normalize />
      <GlobalStyles />
      <Router />
    </>
  );
};

export default App;
