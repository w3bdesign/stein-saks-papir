import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Header from './components/Header/Header.component';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);
