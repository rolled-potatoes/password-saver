import React from 'react';
import BackdropLoader from './BackdropLoader';

const Context = React.createContext();
Context.displayName = 'BackdropdLoaderContext';

export const useBackdrop = () => {
  const value = React.useContext(Context);

  return value;
};

export const Provider = ({ children, initVisible = false, ...rest } = {}) => {
  const [visible, setVisible] = React.useState(initVisible);
  const toggleVisible = () => setVisible((prev) => !prev);

  const value = {
    visible,
    toggleVisible,
    setTrueVisible: () => setVisible(true),
    setFalseVisible: () => setVisible(false),
  };

  return (
    <Context.Provider {...rest} value={value}>
      {children}
      {visible && <BackdropLoader />}
    </Context.Provider>
  );
};
