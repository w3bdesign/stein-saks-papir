import React, { createElement, Fragment } from 'react';
import PropTypes from 'prop-types';

import Button from 'react-bootstrap/Button';

import WEAPONS from '../../../const/WEAPONS';

/**
 * Viser knapper med våpnene som vi kan velge
 * @param {Function} handlePlayGameClick Funksjon som setter spillet i gang
 * @param {String} havewonThreeRounds Hvem som har vunnet tre runder
 */

function ListWeapons({ handlePlayGameClick, havewonThreeRounds }) {
  // Refaktorer onClick senere om hastighet blir et problem
  const weaponClass = `m-4 d-inline-block ${havewonThreeRounds && 'd-none'}`;

  return (
    <div className="m-4">
      {WEAPONS.map(({ name, id, component }) => (
        <Fragment key={id}>
          <div className={weaponClass} data-testid={`${name}Div`}>
            <Button
              data-testid={name}
              data-cy={name}
              variant="outline-dark"
              aria-label={name}
              onClick={() => handlePlayGameClick(name)}
            >
              {createElement(component)}
            </Button>
          </div>
        </Fragment>
      ))}
    </div>
  );
}

ListWeapons.defaultProps = {
  handlePlayGameClick: PropTypes.func,
  havewonThreeRounds: PropTypes.string
};

ListWeapons.propTypes = {
  handlePlayGameClick: PropTypes.func,
  havewonThreeRounds: PropTypes.string
};

export default ListWeapons;
