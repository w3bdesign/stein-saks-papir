import { useStoreState } from 'easy-peasy';
import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';

/**
 * Funksjonen som viser selve poengtavlen. Henter spillernavn og poeng dynamisk fra state.
 * Viser bare navn og score hvis verdiene er definerte og eksisterer.
 * @returns {JSXElement} Returnerer JSX elementer med poengtavle
 */
function Scoreboard() {
  const Player = useStoreState((player) => player.score);
  return (
    <Card className="mx-auto mt-5 text-center d-none d-xl-block d-lg-block d-md-block">
      <Card.Header>
        <h6>Poengtavle</h6>
      </Card.Header>
      <CardDeck className="m-4">
        {Player
          && Player.map((player, index) => (
            <Card key={player.Name}>
              <Card.Body>
                <Card.Title>
                  <span>{player.Name}</span>
                </Card.Title>
                <Card.Text>
                  <span
                    id={`score-p${index}`}
                    data-testid={`score-p${index}`}
                    data-cy={`score-p${index}`}
                    className="display-3"
                  >
                    {player.Score}
                  </span>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
      </CardDeck>
    </Card>
  );
}

export default Scoreboard;
