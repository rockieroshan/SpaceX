import { action } from 'typesafe-actions';

import { HistoryActionTypes } from './historyActionTypes';
import { History } from './historyTypes';

export const fetchHistoryRequest = () =>
  action(HistoryActionTypes.FETCH_REQUEST);

export const fetchHistorySuccess = (data: History[]) =>
  action(HistoryActionTypes.FETCH_SUCCESS, data);

export const fetchHistoryError = (message: string) =>
  action(HistoryActionTypes.FETCH_ERROR, message);
