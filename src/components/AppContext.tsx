import React, {
  useState,
  createContext,
  SetStateAction,
  Dispatch,
} from 'react';
import PropTypes, { element } from 'prop-types';
import { IPin } from '../types/Pin';
import IModal from '../types/Modal';

interface IAppContext {
  pinList: IPin[];
  addPin: (pin: IPin) => void;
  modal: IModal;
  setModal: Dispatch<SetStateAction<IModal>>;
}

interface IAppProvider {
  children: React.ReactNode
}

export const AppContext = createContext<IAppContext>({
  pinList: [],
  addPin: () => {},
  modal: {
    show: false,
    type: '',
    data: {},
  },
  setModal: () => {},
});

export const AppProvider: React.FC<IAppProvider> = ({
  children,
}) => {
  const [modal, setModal] = useState<IModal>({
    show: false,
    type: '',
    data: {},
  });
  const [pinList, setPinList] = useState<IPin[]>([]);
  const addPin = (pin: IPin) => {
    setPinList((prevPinList) => [...prevPinList, pin]);
  };

  return (
    <AppContext.Provider value={{
      pinList,
      addPin,
      modal,
      setModal,
    }}
    >
      {children}
    </AppContext.Provider>
  );
};

AppProvider.propTypes = {
  children: PropTypes.arrayOf(element).isRequired,
};
