import WEAPONS from '../const/WEAPONS';
import type { Weapon } from '../const/WEAPONS';

/**
 * Genererer et tilfeldig valgt våpen
 * Runder av verdien fra Math.random ganger med lengden av WEAPONS
 * @returns Et tilfeldig valgt våpen
 */

function RandomWeapon(): Weapon {
  const randomIndex = Math.floor(Math.random() * WEAPONS.length);

  return WEAPONS[randomIndex]!;
}

export default RandomWeapon;
