import WEAPONS from '../const/WEAPONS';
import type { Weapon } from '../const/WEAPONS';

/**
 * Genererer et tilfeldig valgt våpen
 * Bruker crypto.getRandomValues for kryptografisk sikker tilfeldighet
 * @returns Et tilfeldig valgt våpen
 */

function RandomWeapon(): Weapon {
  const array = new Uint32Array(1);
  crypto.getRandomValues(array);
  const randomIndex = array[0]! % WEAPONS.length;

  return WEAPONS[randomIndex]!;
}

export default RandomWeapon;
