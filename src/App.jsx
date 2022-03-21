import React from 'react';
import { StoreProvider } from 'easy-peasy';
import Container from 'react-bootstrap/Container';

import Main from './components/Pages/Index/Main.component';
import ScoreBoardStore from './state/ScoreBoardStore';

function App() {
  return (
    <StoreProvider store={ScoreBoardStore}>
      <div className="root">
        <Container fluid="md">
          <Main />
        </Container>
      </div>
    </StoreProvider>
  );
}

export default App;
