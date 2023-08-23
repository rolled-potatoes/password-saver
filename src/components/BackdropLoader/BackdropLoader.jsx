import React from 'react';
import Loader from 'components/Loader';
import * as styles from './style';

const BackdropLoader = (props={}) => {
  return (
    <styles.BackdropLoader {...props}>
      <styles.Dimm />
      <Loader />
    </styles.BackdropLoader>
  );
};

export default BackdropLoader;
