import Container from 'react-bootstrap/Container';

import Main from './components/Pages/Index/Main.component';
import useScoreBoardStore from './state/ScoreBoardStore';

/**
 * Hovedapplikasjonen.
 */

if (window.Cypress) {
  window.store = useScoreBoardStore;
}

function App() {
  return (
    <div className="root">
      <Container fluid="md">
        <Main />
      </Container>
    </div>
  );
}

export default App;
