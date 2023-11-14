import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
      <h1>home</h1>
      <Link to={'store'}>store</Link>
    </>
  );
};

export default Home;
