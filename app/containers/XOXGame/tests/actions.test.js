import {
  UPDATE_GAMESTATE,
  SET_NEXT_PLAYER,
} from '../constants';

import {
  setGameStatePosition,
  setNextPlayer,
} from '../actions';

describe('Game Actions', () => {
  describe('setGameStatePosition', () => {
    it('should return the correct position and value of the player X or O', () => {
      const index = 1;
      const value = 'X';
      const expectedResult = {
        type: UPDATE_GAMESTATE,
        index,
        value,
      };
      expect(setGameStatePosition(index, value)).toEqual(expectedResult);
    });
  });
});

describe('Game Actions', () => {
  describe('setNextPlayer', () => {
    it('should call the next player with no parameters', () => {
      const expectedResult = {
        type: SET_NEXT_PLAYER,
      };
      expect(setNextPlayer()).toEqual(expectedResult);
    });
  });
});
