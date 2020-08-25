import * as React from 'react';

import { fetchLaunchesRequest } from '../../state/launches/launchesActions';

import { useDispatch, useSelector } from 'react-redux';
import { LaunchesState } from '../../state/launches/launchesTypes';

const Launches: React.SFC = () => {
  const { launchesRespData } = useSelector(
    ({ launches }: { launches: LaunchesState }) => ({
      launchesRespData: launches.data,
    })
  );
  const launchesDispatch = useDispatch();

  React.useEffect((): void => {
    launchesDispatch(fetchLaunchesRequest());
  }, [fetchLaunchesRequest]);

  return <div></div>;
};

export default Launches;
