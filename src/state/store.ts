import { createStore, applyMiddleware, combineReducers } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import { composeWithDevTools } from 'redux-devtools-extension';

import { historyReducer } from './history/historyReducer';
import { launchReducer } from './launches/launchesReducer';
import historySaga from './history/historySagas';
import launchesSaga from './launches/launchesSagas';

const sagaMiddleware = createSagaMiddleware();

function* rootSaga() {
  yield all([historySaga(), launchesSaga()]);
}

const rootReducer = combineReducers({
  history: historyReducer,
  launches: launchReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);

export default store;
