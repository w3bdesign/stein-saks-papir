import React from 'react';
import { useStoreActions } from 'easy-peasy';

import Button from 'react-bootstrap/Button';

/**
 * Funksjon for å nullstille spillet og sette score for spillerne til 0.
 * Kaller reset funksjonen fra Easy Peasy store.
 * @returns {JSXElement} Returnerer knappen som beskrevet over
 */
function ResetGameButton() {
  const resetGame = useStoreActions((actions) => actions.reset);

  return (
    <>
      <Button variant="danger" className="mt-0 mb-4" onClick={resetGame}>
        Restart spill
      </Button>
    </>
  );
}

export default ResetGameButton;
