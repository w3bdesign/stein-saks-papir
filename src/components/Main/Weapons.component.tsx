import React from 'react';

import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';

import { ReactComponent as HandScissors } from '../../assets/hand-scissors-solid.svg';
import { ReactComponent as HandRock } from '../../assets/hand-rock-solid.svg';
import { ReactComponent as HandPaper } from '../../assets/hand-paper-solid.svg';

function Weapons() {
  return (
    <>
      <OverlayTrigger
        placement="bottom"
        overlay={(
          <Tooltip id="tooltip-bottom">
            <strong>Saks</strong>
          </Tooltip>
        )}
      >
        <Button data-testid="saks" variant="outline-dark">
          <HandScissors />
        </Button>
      </OverlayTrigger>
      {' '}
      <OverlayTrigger
        placement="bottom"
        overlay={(
          <Tooltip id="tooltip-bottom">
            <strong>Stein</strong>
          </Tooltip>
        )}
      >
        <Button data-testid="stein" variant="outline-dark">
          <HandRock />
        </Button>
      </OverlayTrigger>
      {' '}
      <OverlayTrigger
        placement="bottom"
        overlay={(
          <Tooltip id="tooltip-bottom">
            <strong>Papir</strong>
          </Tooltip>
        )}
      >
        <Button data-testid="papir" variant="outline-dark">
          <HandPaper />
        </Button>
      </OverlayTrigger>
      {' '}
    </>
  );
}

export default Weapons;
