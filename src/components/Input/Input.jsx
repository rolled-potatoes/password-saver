import React from 'react';
import * as styles from './style';

const Input = React.forwardRef((props, ref) => {
  return <styles.Input {...props} ref={ref}/>;
});

export default Input;
