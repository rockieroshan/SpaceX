import * as React from 'react';
import './App.scss';
import History from '../History/History';
import Launchee from '../Launches/Launches';

const App: React.SFC = () => {
  return (
    <>
      <History />
      <Launchee />
    </>
  );
};

export default App;
