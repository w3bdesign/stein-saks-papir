import React from 'react';

import Button from 'react-bootstrap/Button';
import PropTypes from 'prop-types';

import useScoreBoardStore from '@/state/ScoreBoardStore';

/**
 * Funksjon for å nullstille spillet og sette score for spillerne til 0.
 * Kaller reset funksjonen fra Zustand store.
 * @param {Function} sethavewonThreeRounds Funksjon som setter hvem som har vunnet 3 runder
 * @returns {JSXElement} Returnerer knappen som beskrevet over
 */

function ResetGameButton({ sethavewonThreeRounds }) {
  const resetGame = useScoreBoardStore((state) => state.reset);

  const handleResetClick = () => {
    resetGame();
    sethavewonThreeRounds(null);
  };

  return (
    <Button variant="danger" className="mt-0 mb-4" onClick={handleResetClick}>
      Restart spill
    </Button>
  );
}

ResetGameButton.defaultProps = {
  sethavewonThreeRounds: PropTypes.func
};

ResetGameButton.propTypes = {
  sethavewonThreeRounds: PropTypes.func
};

export default ResetGameButton;
