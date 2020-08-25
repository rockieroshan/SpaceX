import * as React from 'react';

import { fetchHistoryRequest } from '../../state/history/historyActions';

import { useDispatch, useSelector } from 'react-redux';
import { HistoryState } from '../../state/history/historyTypes';

const History: React.SFC = () => {
  const { historyRespData } = useSelector(
    ({ history }: { history: HistoryState }) => ({
      historyRespData: history.data,
    })
  );

  const dispatchHistory = useDispatch();

  React.useEffect((): void => {
    dispatchHistory(fetchHistoryRequest());
  }, [fetchHistoryRequest]);

  return <div></div>;
};

export default History;
