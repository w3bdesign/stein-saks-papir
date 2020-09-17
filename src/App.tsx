import React from 'react';
import Container from 'react-bootstrap/Container';

import { action, createStore, StoreProvider } from 'easy-peasy';
import DEFAULT_SCORE from './const/DEFAULT_SCORE';

import Main from './components/Pages/Index/Main.component';

function App() {
  const store = createStore({
    scores: {
      score: DEFAULT_SCORE,
      increase: action((state, payload) => {
        console.log(state);
        console.log(payload);
        // state.items.push(payload);
      }),
    },
  });

  return (
    <StoreProvider store={store}>
      <div className="root">
        <Container fluid="md">
          <Main />
        </Container>
      </div>
    </StoreProvider>
  );
}

export default App;
