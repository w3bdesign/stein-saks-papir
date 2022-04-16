import WEAPONS from '../const/WEAPONS';

import RandomWeapon from './RandomWeapon';
import CheckWinner from './CheckWinner';

/**
 * Funksjonen som er ansvarlig for å spille spillet. Sjekker hvem som har vunnet via CheckWinner.
 * @param {String} playerSelectedWeapon Valgt spillervåpen
 * @returns {Object} Returnerer et objekt med resultatet og hva motstanderen valgte
 */

function PlayGame(playerSelectedWeapon) {
  const playerSelected = WEAPONS.find((weapon) => weapon.name === playerSelectedWeapon);

  const computerSelected = RandomWeapon();
  const youWin = CheckWinner(playerSelected, computerSelected);

  if (playerSelected.name === computerSelected.name) {
    return {
      winner: 'Uavgjort',
      computerSelected: computerSelected.name,
    };
  }

  if (youWin) {
    return {
      winner: 'Spiller 1',
      computerSelected: computerSelected.name,
    };
  }

  return {
    winner: 'CPU',
    computerSelected: computerSelected.name,
  };
}

export default PlayGame;
