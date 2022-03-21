import React from 'react';
import { useStoreActions } from 'easy-peasy';

import Button from 'react-bootstrap/Button';

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
