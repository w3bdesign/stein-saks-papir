import React from 'react';
import { Card } from 'react-bootstrap';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Scoreboard from './Scoreboard.component';
import Weapons from './ListWeapons.component';

function Main() {
  return (
    <Row className="text-center justify-content-center">
      <Col>
        <Card className="mx-auto mt-4 text-center ">
          <br />
          <h1>Velkommen til Stein, Saks og Papir</h1>
          <br />
          <h4>Velg ditt våpen under for å starte spillet</h4>
        </Card>
        <br />
        <Weapons />
        <Scoreboard />
      </Col>
    </Row>
  );
}

export default Main;
