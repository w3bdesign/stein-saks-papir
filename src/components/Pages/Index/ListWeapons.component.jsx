import React from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';

import { ReactComponent as HandScissors } from '../../../assets/hand-scissors-solid.svg';
import { ReactComponent as HandRock } from '../../../assets/hand-rock-solid.svg';
import { ReactComponent as HandPaper } from '../../../assets/hand-paper-solid.svg';

/**
 * Viser knapper med våpnene som vi kan velge
 * @param {Function} handlePlayGameClick Funksjon som setter spillet i gang
 * @param {String} havewonThreeRounds Hvem som har vunnet tre runder
 */

function ListWeapons({ handlePlayGameClick, havewonThreeRounds }) {
  // Refaktorer onClick senere om hastighet blir et problem
  const weaponClass = `m-4 d-inline ${havewonThreeRounds && 'd-none'}`
  return (
    <div className="m-4">
      <div className={weaponClass}>
        <Button
          data-testid="saks"
          data-cy="saks"
          variant="outline-dark"
          aria-label="Saks"
          onClick={() => handlePlayGameClick('Saks')}
        >
          <HandScissors />
        </Button>
      </div>
      <div
        data-testid="steinDiv"
        className={weaponClass}
      >
        <Button
          data-testid="stein"
          data-cy="stein"
          variant="outline-dark"
          aria-label="Stein"
          onClick={() => handlePlayGameClick('Stein')}
        >
          <HandRock />
        </Button>
      </div>
      <div className={weaponClass}>
        <Button
          data-testid="papir"
          data-cy="papir"
          variant="outline-dark"
          aria-label="Papir"
          onClick={() => handlePlayGameClick('Papir')}
        >
          <HandPaper />
        </Button>
      </div>
    </div>
  );
}

ListWeapons.defaultProps = {
  handlePlayGameClick: PropTypes.func,
  havewonThreeRounds: PropTypes.string,
};

ListWeapons.propTypes = {
  handlePlayGameClick: PropTypes.func,
  havewonThreeRounds: PropTypes.string,
};

export default ListWeapons;
