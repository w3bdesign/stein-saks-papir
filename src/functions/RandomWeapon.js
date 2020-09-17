import WEAPONS from '../const/WEAPONS';

function RandomWeapon() {
  const randomIndex = Math.floor(Math.random() * WEAPONS.length);

  return WEAPONS[randomIndex];
}

export default RandomWeapon;
