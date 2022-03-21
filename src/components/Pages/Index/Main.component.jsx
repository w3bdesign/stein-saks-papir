import React from 'react';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';

import Scoreboard from './Scoreboard.component';
import ListWeapons from './ListWeapons.component';

/**
 * Hovedkomponenten som viser våpnene, resetknapp og poengtavle.
 * @returns {JSXElement} Returnerer JSX elementer. Se over for beskrivelse.
 */
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
          <ListWeapons />
        </Card>
        <Scoreboard />
      </Col>
    </Row>
  );
}

export default Main;
