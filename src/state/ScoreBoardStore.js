import { action, createStore } from 'easy-peasy';

import DEFAULT_SCORE from '../const/DEFAULT_SCORE';

// TODO Skille ut state og actions i separate filer fra /model og slå de sammen her
// TODO Koden blir enklere, ryddigere og lettere å lese/forstå

/**
 * Easy Peasy store med poengstatus (score)
 * increaseScore for å øke score og reset for å nullstille poengstatus
 */

const ScoreBoardStore = createStore({
  score: DEFAULT_SCORE,
  finalWinner: null,
  increaseScore: action((state, payload) => {
    const playerIndex = state.score.findIndex(
      (element) => element.Name === payload,
    );
    state.score[playerIndex].Score += 1;
  }),
  reset: action((state) => {
    state.score.forEach((player) => (player.Score = 0));
  }),
  devTools: process.env.NODE_ENV === 'development',
});

export default ScoreBoardStore;
