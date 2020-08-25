import { put, takeEvery, call } from 'redux-saga/effects';
import axios from 'axios';

import * as actionTypes from './historyActionTypes';
import { fetchHistorySuccess, fetchHistoryError } from './historyActions';

function* fetchHistorySaga() {
  try {
    const res = yield call(axios.get, 'https://api.spacexdata.com/v3/history');
    if (res.error) {
      yield put(fetchHistoryError(res.error));
    } else {
      yield put(fetchHistorySuccess(res));
    }
  } catch (error) {
    if (error instanceof Error) {
      yield put(fetchHistoryError(error.stack!));
    }
  }
}

function* watchHistorySaga() {
  yield takeEvery(
    actionTypes.HistoryActionTypes.FETCH_REQUEST,
    fetchHistorySaga
  );
}

export default watchHistorySaga;
