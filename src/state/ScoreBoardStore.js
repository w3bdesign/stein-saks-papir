import { action, createStore } from 'easy-peasy';

import DEFAULT_SCORE from '../const/DEFAULT_SCORE';

const ScoreBoardStore = createStore({
  score: DEFAULT_SCORE,
  play: action(() => {
  // play: action((state, payload) => {
    /* const player1Index = state.score.findIndex(
      (element) => element.Name === 'Player 1',
    );
    const CPUIndex = state.score.findIndex(
      (element) => element.Name === 'CPU',
    ); */
  }),

  reset: action((state) => {
    // Reset score for every player
    state.score.forEach((player) => player.Score = 0);
  }),
  devTools: process.env.NODE_ENV === 'development',
});

export default ScoreBoardStore;
