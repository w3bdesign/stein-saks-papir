import React, { useState } from 'react';
import { useStoreActions } from 'easy-peasy';

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import PlayGame from '../../../functions/PlayGame';

import ShowWinner from './ShowWinner.component';

import { ReactComponent as HandScissors } from '../../../assets/hand-scissors-solid.svg';
import { ReactComponent as HandRock } from '../../../assets/hand-rock-solid.svg';
import { ReactComponent as HandPaper } from '../../../assets/hand-paper-solid.svg';

/**
 * Generer knappene som viser våpnene
 * Håndterer det som skjer når knappene trykkes på via handlePlayGameClick()
 * Kaller increaseScore action fra Easy Peasy state
 * @returns void
 */
function ListWeapons() {
  // eslint-disable-next-line no-unused-vars
  const [show, setShow] = useState(false);
  const [winner, setWinner] = useState(false);

  const increaseScore = useStoreActions((actions) => actions.increaseScore);

  const handlePlayGameClick = (Weapon) => {
    if (PlayGame(Weapon) === 'Player 1') {
      setWinner('Player 1');
      setShow(true);
      // ShowWinner('Player 1');
      increaseScore('Player 1');
    } else if (PlayGame(Weapon) === 'CPU') {
      setWinner('CPU');
      setShow(true);
      // ShowWinner('CPU');
      increaseScore('CPU');
    }
  };

  return (
    <>
      <ShowWinner show={false} winner={winner} />
      <OverlayTrigger
        placement="bottom"
        overlay={(
          <Tooltip id="tooltip-bottom">
            <strong>Saks</strong>
          </Tooltip>
        )}
      >
        <Button
          className="m-4"
          data-testid="saks"
          variant="outline-dark"
          onClick={() => {
            handlePlayGameClick('Saks');
          }}
        >
          <HandScissors />
        </Button>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={(
          <Tooltip id="tooltip-bottom">
            <strong>Stein</strong>
          </Tooltip>
        )}
      >
        <Button
          className="m-4"
          data-testid="stein"
          variant="outline-dark"
          onClick={() => {
            handlePlayGameClick('Stein');
          }}
        >
          <HandRock />
        </Button>
      </OverlayTrigger>
      <OverlayTrigger
        placement="bottom"
        overlay={(
          <Tooltip id="tooltip-bottom">
            <strong>Papir</strong>
          </Tooltip>
        )}
      >
        <Button
          className="m-4"
          data-testid="papir"
          variant="outline-dark"
          onClick={() => {
            handlePlayGameClick('Papir');
          }}
        >
          <HandPaper />
        </Button>
      </OverlayTrigger>
    </>
  );
}

export default ListWeapons;
