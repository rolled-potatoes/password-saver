import React from 'react';
import * as styles from './style';

function Label({children , ...rest}){
  return (
    <styles.Label {...rest}>{children}</styles.Label>
  )
}

export default Label;
