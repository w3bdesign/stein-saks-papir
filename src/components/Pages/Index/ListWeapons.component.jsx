import React from 'react';

import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';

import { ReactComponent as HandScissors } from '../../../assets/hand-scissors-solid.svg';
import { ReactComponent as HandRock } from '../../../assets/hand-rock-solid.svg';
import { ReactComponent as HandPaper } from '../../../assets/hand-paper-solid.svg';

/**
 * Viser knapper med våpnene som vi kan velge
 * @param {Function} handlePlayGameClick Funksjon som setter spillet i gang
 */

// TODO Endre dette til dynamisk data fremfor hardkodede verdier
// TODO Vi kan hente dette ut fra \src\const\WEAPONS.js

function ListWeapons({ handlePlayGameClick }) {
  return (
    <>
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
