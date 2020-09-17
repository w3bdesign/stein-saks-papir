import WEAPONS from '../const/WEAPONS';

import RandomWeapon from './RandomWeapon';
import CheckWinner from './CheckWinner';

function PlayGame(playerSelectedWeapon) {
  const playerSelected = WEAPONS.find(
    (weapon) => weapon.name === playerSelectedWeapon,
  );
  const computerSelected = RandomWeapon();

  const youWin = CheckWinner(playerSelected, computerSelected);

  if (playerSelectedWeapon === computerSelected.name) {
    return 'Uavgjort';
  }

  if (youWin) { return 'Player 1'; } // console.log(`Du vant! Computer valgte ${computerSelected.name} `);
  if (!youWin) { return 'CPU'; } // console.log(`Du vant ikke! Computer valgte ${computerSelected.name} `);
}

export default PlayGame;
