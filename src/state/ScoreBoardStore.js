import { action, createStore } from 'easy-peasy';

import DEFAULT_SCORE from '../const/DEFAULT_SCORE';

/**
 * Easy Peasy store med poengstatus (score)
 * increaseScore for å øke score og reset for å nullstille poengstatus
 */

const isDevelopmentEnv = process.env.NODE_ENV === 'development';

const ScoreBoardStore = createStore({
  score: DEFAULT_SCORE,
  increaseScore: action((state, payload) => {
    const playerIndex = state.score.findIndex((element) => element.Name === payload);
    state.score[playerIndex].Score += 1;
  }),
  reset: action((state) => {
    state.score.forEach((player) => {
      player.Score = 0;
    });
  }),
  devTools: isDevelopmentEnv
});

export default ScoreBoardStore;
