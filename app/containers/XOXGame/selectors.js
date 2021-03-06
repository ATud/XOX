/**
 * XOXGame selectors
 */

import { createSelector } from 'reselect';

const selectGame = (state) => state.get('game');

const makeSelectGameState = () => createSelector(
  selectGame,
  (gameState) => gameState.get('gameState')
);

const getPlayer = () => createSelector(
  selectGame,
  (gameState) => gameState.get('nextPlayer')
);

const getGameOverStatus = () => createSelector(
  selectGame,
  (gameState) => gameState.get('gameOver')
);

const getUndecidedStatus = () => createSelector(
  selectGame,
  (gameState) => gameState.get('undecided')
);

export {
  selectGame,
  makeSelectGameState,
  getPlayer,
  getGameOverStatus,
  getUndecidedStatus,
};
