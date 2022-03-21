import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Scoreboard from './Scoreboard.component';
import Weapons from './Weapons.component';

function Main() {
  return (
    <Row className="text-center justify-content-center">
      <Col>
        <br />
        <h1>Velkommen til Stein, Saks og Papir</h1>
        <br />
        <h4>Velg ditt våpen under for å starte spillet</h4>
        <br />
        <br />
        <Weapons />
        <Scoreboard />
      </Col>
    </Row>
  );
}

export default Main;
