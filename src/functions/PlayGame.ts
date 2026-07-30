import WEAPONS from '../const/WEAPONS';

import RandomWeapon from './RandomWeapon';
import CheckWinner from './CheckWinner';

export interface GameResult {
  winner: string;
  computerSelected: string;
}

/**
 * Funksjonen som er ansvarlig for å spille spillet. Sjekker hvem som har vunnet via CheckWinner.
 * @param playerSelectedWeapon Valgt spillervåpen
 * @returns Returnerer et objekt med resultatet og hva motstanderen valgte
 */

function PlayGame(playerSelectedWeapon: string): GameResult {
  const playerSelected = WEAPONS.find((weapon) => weapon.name === playerSelectedWeapon);

  if (!playerSelected) {
    throw new Error(`Unknown weapon: ${playerSelectedWeapon}`);
  }

  const computerSelected = RandomWeapon();
  const youWin = CheckWinner(playerSelected, computerSelected);

  if (playerSelected.name === computerSelected.name) {
    return {
      winner: 'Uavgjort',
      computerSelected: computerSelected.name
    };
  }

  if (youWin) {
    return {
      winner: 'Spiller 1',
      computerSelected: computerSelected.name
    };
  }

  return {
    winner: 'CPU',
    computerSelected: computerSelected.name
  };
}

export default PlayGame;
