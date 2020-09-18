import React, { useState, useEffect } from 'react';
import { useStoreActions, useStoreState } from 'easy-peasy';

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Alert from 'react-bootstrap/Alert';

import PlayGame from '../../../functions/PlayGame';

import ShowWinner from './ShowWinner.component';
import ResetGameButton from './ResetGameButton.component';

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
  const [shouldCheckWinner, setshouldCheckWinner] = useState(false);
  const [computerSelected, setcomputerSelected] = useState(null);
  const [havewonThreeRounds, sethavewonThreeRounds] = useState(null);

  const increaseScore = useStoreActions((actions) => actions.increaseScore);
  const getScore = useStoreState((score) => score.score);

  const haveFinalWinner = getScore.find((score) => score.Score === 1);

  useEffect(() => {
    if (haveFinalWinner) {
      sethavewonThreeRounds(haveFinalWinner.Name);
      setshouldCheckWinner(false);
    }
  }, [shouldCheckWinner]);

  const handlePlayGameClick = (Weapon) => {
    const resultOfGame = PlayGame(Weapon);

    setcomputerSelected(resultOfGame.computerSelected);

    switch (resultOfGame.winner) {
      case 'Spiller 1':
        setWinner('Spiller 1');
        setShowWinnerModal(true);
        increaseScore('Spiller 1');
        setTimeout(() => {
          setshouldCheckWinner(true);
        }, 2000);

        break;
      case 'CPU':
        setWinner('CPU');
        setShowWinnerModal(true);
        increaseScore('CPU');
        setTimeout(() => {
          setshouldCheckWinner(true);
        }, 2000);
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
        computerSelected={computerSelected}
        winner={winner}
      />
      {havewonThreeRounds && (
        <>
          <br />
          <br />
          <Alert
            className="animate__animated animate__zoomInUp"
            variant="success"
          >
            {havewonThreeRounds}
            {' '}
            har vunnet! Hurra!
            <br />
          </Alert>
        </>
      )}
      <div
        className={`animate__animated ${
          havewonThreeRounds && 'animate__zoomOutUp position-absolute'
        }`}
      >
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
      </div>
      <ResetGameButton sethavewonThreeRounds={sethavewonThreeRounds} />
    </>
  );
}

export default ListWeapons;
