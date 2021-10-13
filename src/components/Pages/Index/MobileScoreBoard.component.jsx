import React from 'react';
import { useStoreState } from 'easy-peasy';

import Card from 'react-bootstrap/Card';

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
                  <h5 className="font-weight-bold mt-2">{player.Score}</h5>
                </div>
              ))}
          </Card.Body>
        </Card>
      </div>
    </>
  );
}

export default MobileScoreboard;
