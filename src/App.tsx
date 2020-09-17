import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';

import DEFAULT_SCORE from './const/DEFAULT_SCORE';

import ScoreBoardContext from './context/ScoreBoardContext';

import Main from './components/Pages/Index/Main.component';

function App() {
  const [score] = useState(DEFAULT_SCORE);
  return (
    <ScoreBoardContext.Provider value={score}>
      <div className="root">
        <Container fluid="md">
          <Main />
        </Container>
      </div>
    </ScoreBoardContext.Provider>
  );
}

export default App;
