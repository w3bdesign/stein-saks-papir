import React from 'react';
import { useStoreState } from 'easy-peasy';

import Card from 'react-bootstrap/Card';
// import Alert from 'react-bootstrap/Alert';
/* import ListGroup from 'react-bootstrap/ListGroup';
import Alert from 'react-bootstrap/Alert'; */

/**
 * Funksjonen som viser selve poengtavlen. Henter spillernavn og poeng dynamisk fra state.
 * Viser bare navn og score hvis verdiene er definerte og eksisterer.
 * @returns {JSXElement} Returnerer JSX elementer med poengtavle
 */
function MobileScoreboard() {
  const Player = useStoreState((player) => player.score);
  return (
    <>
      <div className="d-xl-none d-lg-none d-md-none">
        <Card className="mt-2">
          <Card.Header>
            <h6>Poengoversikt</h6>
          </Card.Header>
          <Card.Body>
            {Player
              && Player.map((player) => (
                <div key={player.Name} className="m-2">
                  <Card.Header bg="secondary">{player.Name}</Card.Header>
                  {player.Score}
                </div>
              ))}
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default MobileScoreboard;
