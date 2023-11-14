import Router from './pages';
import { Normalize } from 'styled-normalize';
import React from 'react';
const App: React.FC = () => {
  return (
    <>
      <Normalize />
      <Router />
    </>
  );
};

export default App;
