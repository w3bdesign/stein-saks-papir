import React from 'react';
import { useStoreActions } from 'easy-peasy';

import Button from 'react-bootstrap/Button';

function ResetGameButton() {
  const increaseScore = useStoreActions((actions) => actions.reset);

  return (
    <>
      <Button variant="danger" className="mt-0 mb-4" onClick={increaseScore}>
        Restart spill
      </Button>
    </>
  );
}

export default ResetGameButton;
