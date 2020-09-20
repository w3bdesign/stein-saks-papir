import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Header from './components/Layout/Header/Header.component';
import SEO from './components/Layout/SEO.component';

import 'bootstrap/dist/css/bootstrap.min.css';
import './css/stylesheet.css';
import './css/animate.min.css';

ReactDOM.render(
  <>
    <SEO />
    <Header />
    <App />
  </>,
  document.getElementById('root'),
);
