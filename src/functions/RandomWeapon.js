import WEAPONS from "../const/WEAPONS";

/**
 * Genererer et tilfeldig valgt våpen
 * Runder av verdien fra Math.random ganger med lengden av WEAPONS
 * @returns {Object[]} WEAPONS[randomIndex] Et tilfeldig valgt våpen hvor randomIndex er indeks
 */

function RandomWeapon() {
  const randomIndex = Math.floor(Math.random() * WEAPONS.length);

  return WEAPONS[randomIndex];
}

export default RandomWeapon;
