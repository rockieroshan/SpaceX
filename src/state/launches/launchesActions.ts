import { action } from 'typesafe-actions';

import { LaunchesActionTypes } from './launchesActionTypes';
import { Launches } from './launchesTypes';

export const fetchLaunchesRequest = () =>
  action(LaunchesActionTypes.FETCH_REQUEST);

export const fetchLaunchesSuccess = (data: Launches[]) =>
  action(LaunchesActionTypes.FETCH_SUCCESS, data);

export const fetchLaunchesError = (message: string) =>
  action(LaunchesActionTypes.FETCH_ERROR, message);
