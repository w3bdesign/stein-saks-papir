import React from 'react';
import { useStoreState } from 'easy-peasy';

import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

function Scoreboard() {
  const Player = useStoreState((player) => player.scores.score);
  return (
    <>
      <Card className="mx-auto mt-5 text-center">
        <Card.Header>
          <h5>Poengtavle</h5>
        </Card.Header>
        <CardDeck className="m-4">
          <Card>
            <Card.Body>
              <Card.Title>
                <span style={{ fontSize: '1.25rem' }}>{Player[0].Name}</span>
              </Card.Title>
              <Card.Text>
                <span className="display-3">
                  {' '}
                  {Player[0].Score}
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                <span style={{ fontSize: '1.25rem' }}>{Player[1].Name}</span>
              </Card.Title>
              <Card.Text>
                <span className="display-3">
                  {' '}
                  {Player[1].Score}
                </span>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Card>
    </>
  );
}

export default Scoreboard;
