import { Reducer } from 'redux';
import { HistoryActionTypes } from './historyActionTypes';
import { HistoryState } from './historyTypes';

const initialState: HistoryState = {
  data: [],
  errors: undefined,
  loading: false,
};

const reducer: Reducer<HistoryState> = (state = initialState, action) => {
  switch (action.type) {
    case HistoryActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case HistoryActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload.data };
    }
    case HistoryActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload.data };
    }
    default: {
      return state;
    }
  }
};

export { reducer as historyReducer };
