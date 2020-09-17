import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Header from './components/Layout/Header/Header.component';

import DEFAULT_SCORE from './const/DEFAULT_SCORE';

import ScoreBoardContext from './context/ScoreBoardContext';

import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <>
    <ScoreBoardContext.Provider value={DEFAULT_SCORE}>
      <Header />
      <App />
    </ScoreBoardContext.Provider>
  </>,
  document.getElementById('root'),
);
