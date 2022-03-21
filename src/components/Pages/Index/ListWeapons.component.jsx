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
  const [showWinnerModal, setShowWinnerModal] = useState(false);
  const [winner, setWinner] = useState(null);

  const increaseScore = useStoreActions((actions) => actions.increaseScore);
  // const getScore = useStoreState((score) => score.score);

  // const haveFinalWinner = getScore.find((score) => score.Score === 1);

  const handlePlayGameClick = (Weapon) => {
    // console.log(getScore);

    switch (PlayGame(Weapon).winner) {
      case 'Spiller 1':
        setWinner('Spiller 1');
        setShowWinnerModal(true);
        increaseScore('Spiller 1');
        // console.log(haveFinalWinner);
        break;
      case 'CPU':
        setWinner('CPU');
        setShowWinnerModal(true);
        increaseScore('CPU');
        // console.log(haveFinalWinner);
        break;
      case 'Uavgjort':
        setWinner('Uavgjort');
        setShowWinnerModal(true);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <ShowWinner
        showWinnerModal={showWinnerModal}
        setShowWinnerModal={setShowWinnerModal}
        winner={winner}
      />
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
          aria-label="Saks"
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
          aria-label="Stein"
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
          aria-label="Papir"
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
