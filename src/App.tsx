import React from 'react';
import Container from 'react-bootstrap/Container';

import Main from './components/Pages/Index/Main.component';

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
