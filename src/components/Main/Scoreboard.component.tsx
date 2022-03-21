import React from 'react';
import { Card } from 'react-bootstrap';

function Scoreboard() {
  return (
    <>
      <Card className="mx-auto mt-5 text-center">
        <Card.Header>
          <h5>Poengtavle</h5>
        </Card.Header>
        <Card.Body>Spiller | CPU</Card.Body>
      </Card>
    </>
  );
}

export default Scoreboard;
