import React, { useContext } from 'react';
import { AppContext } from '../../AppContext';
import PinForm from '../../Forms/PinForm';
import ModalEnums from '../../../enums/Modal';
import styles from './Modal.module.css';

const Modal = () => {
  const { modal, setModal } = useContext(AppContext);
  if (!modal.show) return null;

  const onClickOutside = (e: React.MouseEvent) => {
    const target = e.target as HTMLDivElement;
    if (target.id === 'modalContainer') {
      setModal({
        show: false,
        type: '',
        data: {},
      });
    }
  };

  const getModal = () => {
    switch (modal.type) {
      case ModalEnums.PIN_MODAL: {
        return (
          <PinForm />
        );
      }
      default:
        return null;
    }
  };

  return (
    <div id="modalContainer" className={styles.modalContainer} onClick={onClickOutside}>
      <div className={styles.modalContent}>
        {getModal()}
      </div>
    </div>
  );
};

export default Modal;
