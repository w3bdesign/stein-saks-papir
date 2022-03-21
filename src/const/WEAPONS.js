import { ReactComponent as HandScissors } from '../assets/hand-scissors-solid.svg';
import { ReactComponent as HandRock } from '../assets/hand-rock-solid.svg';
import { ReactComponent as HandPaper } from '../assets/hand-paper-solid.svg';

/**
 * Konstant med våpnene som brukes og hva som vinner over hva
 */

const WEAPONS = [
  {
    id: 0,
    name: 'Stein',
    beats: 'Saks',
    component: HandRock,
  },
  {
    id: 1,
    name: 'Papir',
    beats: 'Stein',
    component: HandPaper,
  },
  {
    id: 2,
    name: 'Saks',
    beats: 'Papir',
    component: HandScissors,
  },
];

export default WEAPONS;
