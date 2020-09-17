import React from 'react';
import {
  action, createStore, StoreProvider,
} from 'easy-peasy';

import Container from 'react-bootstrap/Container';

import DEFAULT_SCORE from './const/DEFAULT_SCORE';

import Main from './components/Pages/Index/Main.component';

function App() {
  const store = createStore({
    score: DEFAULT_SCORE,
    increase: action((state, payload) => {
      console.log(state);
      console.log(payload);
      // state.score.length = 0;
    }),
    reset: action((state) => ({ Test: state })),
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
