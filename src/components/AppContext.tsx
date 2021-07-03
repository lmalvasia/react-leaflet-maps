import React, {
  useState,
  createContext,
  SetStateAction,
  Dispatch,
} from 'react';
import { IPin } from '../types/Pin';
import IModal from '../types/Modal';

interface IAppContext {
  pinList: IPin[];
  addPin: (pin: IPin) => void;
  editPin: (newPin: IPin, index: number) => void;
  setIsEditingPing: Dispatch<SetStateAction<boolean>>;
  isEditingPin: boolean;
  modal: IModal;
  setModal: Dispatch<SetStateAction<IModal>>;
}

interface IAppProvider {
  children: React.ReactNode
}

export const AppContext = createContext<IAppContext>({
  pinList: [],
  addPin: () => {},
  editPin: () => {},
  setIsEditingPing: () => {},
  isEditingPin: false,
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
  const [isEditingPin, setIsEditingPing] = useState<boolean>(false);
  const [pinList, setPinList] = useState<IPin[]>([]);

  const addPin = (pin: IPin) => {
    setPinList((prevPinList) => [...prevPinList, pin]);
  };

  const editPin = (newPin: IPin, index: number) => {
    const newPinList = pinList.map((pin, pinIndex) => {
      if (pinIndex === index) {
        return newPin;
      }
      return pin;
    });
    setPinList(newPinList);
  };

  return (
    <AppContext.Provider value={{
      pinList,
      addPin,
      setIsEditingPing,
      isEditingPin,
      editPin,
      modal,
      setModal,
    }}
    >
      {children}
    </AppContext.Provider>
  );
};
