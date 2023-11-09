import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ErrorPage from './ErrorPage';
import Router from './routes/Router';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Router />);
