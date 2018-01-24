import {
  LOAD_PLAYERS,
  LOAD_PLAYERS_SUCCESS,
  LOAD_PLAYERS_ERROR,
} from '../constants';

import {
  loadRepos,
  playersLoaded,
  playersLoadingError,
} from '../actions';

describe('App Actions', () => {
  describe('loadRepos', () => {
    it('should return the correct type', () => {
      const expectedResult = {
        type: LOAD_PLAYERS,
      };

      expect(loadRepos()).toEqual(expectedResult);
    });
  });

  describe('playersLoaded', () => {
    it('should return the correct type and the passed repos', () => {
      const fixture = ['Test'];
      const username = 'test';
      const expectedResult = {
        type: LOAD_PLAYERS_SUCCESS,
        repos: fixture,
        username,
      };

      expect(playersLoaded(fixture, username)).toEqual(expectedResult);
    });
  });

  describe('playersLoadingError', () => {
    it('should return the correct type and the error', () => {
      const fixture = {
        msg: 'Something went wrong!',
      };
      const expectedResult = {
        type: LOAD_PLAYERS_ERROR,
        error: fixture,
      };

      expect(playersLoadingError(fixture)).toEqual(expectedResult);
    });
  });
});
