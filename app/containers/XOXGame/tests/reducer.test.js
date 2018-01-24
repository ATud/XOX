import { fromJS } from 'immutable';

import gameReducer from '../reducer';

describe('homeReducer', () => {
  let state;
  beforeEach(() => {
    state = fromJS({
      gameState: Array(9).fill(null),
      nextPlayer: 'X',
    });
  });

  it('should return the initial state', () => {
    const expectedResult = state;
    expect(gameReducer(undefined, {})).toEqual(expectedResult);
  });
});
