import { Reducer } from 'redux';
import { LaunchesActionTypes } from './launchesActionTypes';
import { LaunchesState } from './launchesTypes';

const initialState: LaunchesState = {
  data: [],
  errors: undefined,
  loading: false,
};

const reducer: Reducer<LaunchesState> = (state = initialState, action) => {
  switch (action.type) {
    case LaunchesActionTypes.FETCH_REQUEST: {
      return { ...state, loading: true };
    }
    case LaunchesActionTypes.FETCH_SUCCESS: {
      return { ...state, loading: false, data: action.payload.data };
    }
    case LaunchesActionTypes.FETCH_ERROR: {
      return { ...state, loading: false, errors: action.payload.data };
    }
    default: {
      return state;
    }
  }
};

export { reducer as launchReducer };
