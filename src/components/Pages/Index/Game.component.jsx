import React, { useState, useEffect } from 'react';

import Alert from 'react-bootstrap/Alert';

import PlayGame from '@/functions/PlayGame';
import useScoreBoardStore from '@/state/ScoreBoardStore';

import ResetGameButton from './ResetGameButton.component';
import ListWeapons from './ListWeapons.component';
import ShowWinner from './ShowWinner.component';

/**
 * Generer knappene som viser våpnene
 * Håndterer det som skjer når knappene trykkes på via handlePlayGameClick()
 * Kaller increaseScore action fra Zustand state
 * @returns void
 */
function Game() {
  const [showWinnerModal, setShowWinnerModal] = useState(false);
  const [winner, setWinner] = useState(null);
  const [shouldCheckWinner, setshouldCheckWinner] = useState(false);
  const [computerSelected, setcomputerSelected] = useState(null);
  const [havewonThreeRounds, sethavewonThreeRounds] = useState(null);

  const increaseScore = useScoreBoardStore((state) => state.increaseScore);
  const getScore = useScoreBoardStore((state) => state.score);

  useEffect(() => {
    const haveFinalWinner = getScore.find((score) => score.Score > 2);

    if (haveFinalWinner) {
      sethavewonThreeRounds(haveFinalWinner.Name);
      setshouldCheckWinner(false);
    }
  }, [shouldCheckWinner, getScore]);

  const handlePlayGameClick = (Weapon) => {
    const resultOfGame = PlayGame(Weapon);

    setshouldCheckWinner(false);
    setcomputerSelected(resultOfGame.computerSelected);

    if (resultOfGame.winner === 'Uavgjort') {
      setWinner('Uavgjort');
      setShowWinnerModal(true);
    } else {
      setWinner(resultOfGame.winner);
      setShowWinnerModal(true);
      increaseScore(resultOfGame.winner);
      setTimeout(() => {
        setshouldCheckWinner(true);
      });
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
        <Alert
          className="mt-4 animate__animated animate__zoomInUp"
          name="gamewinner"
          aria-label="gamewinner"
          variant="success"
        >
          {havewonThreeRounds} har vunnet! Hurra!
        </Alert>
      )}
      <ListWeapons
        handlePlayGameClick={handlePlayGameClick}
        havewonThreeRounds={havewonThreeRounds}
      />
      <div className="mt-2">
        <ResetGameButton sethavewonThreeRounds={sethavewonThreeRounds} />
      </div>
    </>
  );
}

export default Game;
