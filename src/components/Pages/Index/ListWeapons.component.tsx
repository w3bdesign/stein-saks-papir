import { createElement, Fragment } from 'react';

import Button from 'react-bootstrap/Button';

import WEAPONS from '@/const/WEAPONS';

/**
 * Viser knapper med våpnene som vi kan velge
 */

interface ListWeaponsProps {
  readonly handlePlayGameClick: (weapon: string) => void;
  readonly havewonThreeRounds: string | null;
}

function ListWeapons({ handlePlayGameClick, havewonThreeRounds }: Readonly<ListWeaponsProps>) {
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

export default ListWeapons;
