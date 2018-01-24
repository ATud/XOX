/*
 * GameReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */
import { fromJS } from 'immutable';

import {
  UPDATE_GAMESTATE,
  SET_NEXT_PLAYER,
} from './constants';

const initialState = fromJS({
  gameState: Array(9).fill(null),
  nextPlayer: 'X',
});

function gameReducer(state = initialState, action) {
  switch (action.type) {
    case UPDATE_GAMESTATE:
      return state
        .set('gameState', state.get('gameState').set(action.index, action.value));
    case SET_NEXT_PLAYER:
      return state
        .set('nextPlayer', state.get('nextPlayer') === 'X' ? 'O' : 'X');
    default:
      return state;
  }
}

export default gameReducer;
