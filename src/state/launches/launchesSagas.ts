import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';

import * as actionTypes from './launchesActionTypes';
import { fetchLaunchesSuccess, fetchLaunchesError } from './launchesActions';

function* fetchLaunchesSaga() {
  try {
    const res = yield call(axios.get, 'https://api.spacexdata.com/v3/launches');
    if (res.error) {
      yield put(fetchLaunchesError(res.error));
    } else {
      yield put(fetchLaunchesSuccess(res));
    }
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchLaunchesError(error.stack!));
    }
  }
}

function* watchLaunchesSaga() {
  yield takeEvery(
    actionTypes.LaunchesActionTypes.FETCH_REQUEST,
    fetchLaunchesSaga
  );
}

export default watchLaunchesSaga;
