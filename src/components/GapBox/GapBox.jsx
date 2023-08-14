import React from 'react';
import * as styles from './style';

const GapBox = React.forwardRef((props, ref) => {
  return <styles.GapBox ref={ref} {...props} />;
});

export default GapBox;
