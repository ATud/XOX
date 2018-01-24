import { fromJS } from 'immutable';

import {
  selectGame,
} from '../selectors';

// TODO also for
// makeSelectGameState,
// getPlayer,

describe('selectHome', () => {
  it('should select the game state', () => {
    const game = fromJS({
      userData: {},
    });
    const mockedState = fromJS({
      game,
    });
    expect(selectGame(mockedState)).toEqual(game);
  });
});
