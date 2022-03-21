import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import Game from './Game.component';
import MobileScoreboard from './MobileScoreBoard.component';
import Scoreboard from './Scoreboard.component';

/**
 * Hovedkomponenten som viser våpnene, resetknapp og poengtavle.
 * @returns {JSXElement} Returnerer JSX elementer. Se over for beskrivelse.
 */
function Main() {
  return (
    <Row className="mt-2 text-center justify-content-center">
      <Col>
        <MobileScoreboard />
        <Card className="d-block mx-auto mt-4 text-center">
          <Card.Header>
            <h6>Velg ditt våpen under for å starte spillet</h6>
          </Card.Header>
          <Game />
        </Card>
        <Scoreboard />
      </Col>
    </Row>
  );
}

export default Main;
