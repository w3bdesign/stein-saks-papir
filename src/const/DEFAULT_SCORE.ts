/**
 * Konstant med standard score og spillernavn
 *  */

export interface Player {
  Name: string;
  Score: number;
}

const DEFAULT_SCORE: Player[] = [
  { Name: 'Spiller 1', Score: 0 },
  { Name: 'CPU', Score: 0 }
];

export default DEFAULT_SCORE;
