/**
 * Gets the repositories of the user from Github
 */

import { call, put, takeLatest } from 'redux-saga/effects';
import { LOAD_PLAYERS } from 'containers/App/constants';
import { playersLoaded, playersLoadingError } from 'containers/App/actions';

import request from 'utils/request';

/**
 * Github repos request/response handler to be implemented
 */
export function* getPlayers() {
  // Select username from store
  const requestURL = 'http://localhost:3000/api/players';

  try {
    // Call our request helper (see 'utils/request')
    const players = yield call(request, requestURL);
    yield put(playersLoaded(players));
  } catch (err) {
    yield put(playersLoadingError(err));
  }
}

/**
 * Root saga manages watcher lifecycle
 */
export default function* playersData() {
  yield takeLatest(LOAD_PLAYERS, getPlayers);
}
