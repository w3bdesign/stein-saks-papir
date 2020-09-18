import WEAPONS from '../const/WEAPONS';

import RandomWeapon from './RandomWeapon';
import CheckWinner from './CheckWinner';

/**
 * Funksjonen som er ansvarlig for å spille spillet. Sjekker hvem som har vunnet via CheckWinner.
 * @param {String} playerSelectedWeapon Valgt spillervåpen
 * @returns {String} Returnerer en string med den som har vunnet ("Spiller 1" | "CPU" | "Uavgjort")
 */

function PlayGame(playerSelectedWeapon) {
  const playerSelected = WEAPONS.find(
    (weapon) => weapon.name === playerSelectedWeapon,
  );
  const computerSelected = RandomWeapon();

  const youWin = CheckWinner(playerSelected, computerSelected);

  if (playerSelectedWeapon === computerSelected.name) {
    return 'Uavgjort';
  }

  if (youWin) {
    return 'Spiller 1';
  }

  return 'CPU';
}

export default PlayGame;
