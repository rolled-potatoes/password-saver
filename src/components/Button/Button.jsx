import React from 'react';
import * as styles from './style';

function Button({
  onClick,
  disabled,
  color = 'primary',
  size = 'md',
  ...rest
}) {
  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick && onClick(e);
  };
  return (
    <styles.Button
      onClick={handleClick}
      disabled={disabled}
      size={size}
      color={color}
      {...rest}
    />
  );
}

export default Button;
