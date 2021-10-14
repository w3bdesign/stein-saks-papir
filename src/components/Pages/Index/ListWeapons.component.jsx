import PropTypes from 'prop-types';
import React from 'react';
import Button from 'react-bootstrap/Button';

import { ReactComponent as HandPaper } from '../../../assets/hand-paper-solid.svg';
import { ReactComponent as HandRock } from '../../../assets/hand-rock-solid.svg';
import { ReactComponent as HandScissors } from '../../../assets/hand-scissors-solid.svg';

/**
 * Viser knapper med våpnene som vi kan velge
 * @param {Function} handlePlayGameClick Funksjon som setter spillet i gang
 */

function ListWeapons({ handlePlayGameClick }) {
  return (
    <>
      <Button
        className="m-4"
        data-testid="saks"
        data-cy="saks"
        variant="outline-dark"
        aria-label="Saks"
        onClick={() => {
          handlePlayGameClick('Saks');
        }}
      >
        <HandScissors />
      </Button>
      <Button
        className="m-4"
        data-testid="stein"
        data-cy="stein"
        variant="outline-dark"
        aria-label="Stein"
        onClick={() => {
          handlePlayGameClick('Stein');
        }}
      >
        <HandRock />
      </Button>
      <Button
        className="m-4"
        data-testid="papir"
        data-cy="papir"
        variant="outline-dark"
        aria-label="Papir"
        onClick={() => {
          handlePlayGameClick('Papir');
        }}
      >
        <HandPaper />
      </Button>
    </>
  );
}

ListWeapons.defaultProps = {
  handlePlayGameClick: PropTypes.func,
};

ListWeapons.propTypes = {
  handlePlayGameClick: PropTypes.func,
};

export default ListWeapons;
