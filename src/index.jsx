import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import Header from './components/Layout/Header/Header.component';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/stylesheet.css';
import './css/animate.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <Header />
    <App />
  </>,
);
