import React, { useContext } from 'react';

import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';

import ScoreBoardContext from '../../../context/ScoreBoardContext';

function Scoreboard() {
  const PlayerScore = useContext(ScoreBoardContext);

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
                <span style={{ fontSize: '1.25rem' }}>
                  {PlayerScore[0].Name}
                </span>
              </Card.Title>
              <Card.Text>
                <span className="display-3">{PlayerScore[0].Score}</span>
              </Card.Text>
            </Card.Body>
          </Card>
          <Card>
            <Card.Body>
              <Card.Title>
                <span style={{ fontSize: '1.25rem' }}>
                  {PlayerScore[1].Name}
                </span>
              </Card.Title>
              <Card.Text>
                <span className="display-3">{PlayerScore[1].Score}</span>
              </Card.Text>
            </Card.Body>
          </Card>
        </CardDeck>
      </Card>
    </>
  );
}

export default Scoreboard;
