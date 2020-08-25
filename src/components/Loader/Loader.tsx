import * as React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Loader = () => {
  return (
    <div className="fp-container">
      <FontAwesomeIcon icon="spinner" className="highlight" />
    </div>
  );
};

export default Loader;
