import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Header from './components/Layout/Header/Header.component';
import Footer from './components/Layout/Footer/Footer.component';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <>
    <Header />
    <App />
    <Footer />
  </>,
  document.getElementById('root'),
);
