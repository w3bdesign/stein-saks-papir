import React from 'react';
import { Card } from 'react-bootstrap';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Scoreboard from './Scoreboard.component';
import Weapons from './ListWeapons.component';

function Main() {
  return (
    <Row className="mt-2 text-center justify-content-center">
      <Col>
        <Card
          style={{ display: 'block' }}
          className="block mx-auto mt-4 text-center"
        >
          <Card.Header>
            <h5>Velg ditt våpen under for å starte spillet</h5>
          </Card.Header>

          <Weapons />
        </Card>
        <Scoreboard />
      </Col>
    </Row>
  );
}

export default Main;
