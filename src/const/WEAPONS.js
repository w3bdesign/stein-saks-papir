import HandScissors from '@/assets/HandScissors';
import HandRock from '@/assets/HandRock';
import HandPaper from '@/assets/HandPaper';

/**
 * Konstant med våpnene som brukes og hva som vinner over hva
 */

const WEAPONS = [
  {
    id: 0,
    name: 'Stein',
    beats: 'Saks',
    component: HandRock
  },
  {
    id: 1,
    name: 'Papir',
    beats: 'Stein',
    component: HandPaper
  },
  {
    id: 2,
    name: 'Saks',
    beats: 'Papir',
    component: HandScissors
  }
];

export default WEAPONS;
