import { create } from 'zustand';

import DEFAULT_SCORE from '../const/DEFAULT_SCORE';

/**
 * Zustand store med poengstatus (score)
 * increaseScore for å øke score og reset for å nullstille poengstatus
 */

const useScoreBoardStore = create((set) => ({
  score: DEFAULT_SCORE.map((player) => ({ ...player })),
  increaseScore: (playerName) =>
    set((state) => ({
      score: state.score.map((player) =>
        player.Name === playerName ? { ...player, Score: player.Score + 1 } : player
      )
    })),
  reset: () =>
    set(() => ({
      score: DEFAULT_SCORE.map((player) => ({ ...player, Score: 0 }))
    }))
}));

export default useScoreBoardStore;
