import React, { useState, createContext } from 'react';
import PropTypes, { element } from 'prop-types';
import { IPin } from '../types/Pin';

interface IAppContext {
  pinList: IPin[];
  addPin: (pin: IPin) => void;
}

interface IAppProvider {
  children: React.ReactNode
}

export const AppContext = createContext<IAppContext>({
  pinList: [],
  addPin: () => {},
});

export const AppProvider: React.FC<IAppProvider> = ({
  children,
}) => {
  const [pinList, setPinList] = useState<IPin[]>([]);
  const addPin = (pin: IPin) => {
    setPinList((prevPinList) => [...prevPinList, pin]);
  };

  return (
    <AppContext.Provider value={{
      pinList,
      addPin,
    }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.arrayOf(element).isRequired,
};
