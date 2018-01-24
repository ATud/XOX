/*
 * Game Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 *
 * To add a new Action:
 * 1) Import your constant
 * 2) Add a function like this:
 *    export function yourAction(var) {
 *        return { type: YOUR_ACTION_CONSTANT, var: var }
 *    }
 */

import {
  UPDATE_GAMESTATE,
  SET_NEXT_PLAYER,
  SET_GAME_OVER,
  RESET_GAME_STATE,
} from './constants';

/**
 * Changes the input field of the form
 *
 * @param  {name} name The new text of the input field
 *
 * @return {object}    An action object with a type of UPDATE_GAMESTATE or SET_NEXT_PLAYER
 */
export function setGameStatePosition(index, value) {
  return {
    type: UPDATE_GAMESTATE,
    index,
    value,
  };
}

export function setNextPlayer() {
  return {
    type: SET_NEXT_PLAYER,
  };
}

export function setGameOver() {
  return {
    type: SET_GAME_OVER,
  };
}

export function resetGameState() {
  return {
    type: RESET_GAME_STATE,
  };
}
