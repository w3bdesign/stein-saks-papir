import React from 'react';
import { Card, CardDeck } from 'react-bootstrap';

function Scoreboard() {
  return (
    <>
      <Card className="mx-auto mt-5 text-center">
        <Card.Header>
          <h5>Poengtavle</h5>
        </Card.Header>

        <CardDeck className="m-4">
          <Card>
            <Card.Body>
              <Card.Title><h5>Spiller 1</h5></Card.Title>
              <Card.Text>
                <h3>0</h3>
              </Card.Text>
            </Card.Body>

          </Card>
          <Card>
            <Card.Body>
              <Card.Title><h5>CPU</h5></Card.Title>
              <Card.Text>
                <h3>0</h3>
              </Card.Text>
            </Card.Body>

          </Card>
        </CardDeck>
      </Card>
    </>
  );
}

export default Scoreboard;
