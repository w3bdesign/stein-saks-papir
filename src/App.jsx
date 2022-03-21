import React from 'react';
import { StoreProvider } from 'easy-peasy';
import Container from 'react-bootstrap/Container';

import Main from './components/Pages/Index/Main.component';
import ScoreBoardStore from './state/ScoreBoardStore';

/**
 * Hovedapplikasjonen. Her bringer vi inn Easy Peasy store provider slik at alt har tilgang til den.
 */

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
