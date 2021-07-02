import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from '../AppContext';
import styles from './PinForm.module.css';

const PinForm = () => {
  const [title, setTitle] = useState<string>('');
  const { modal, setModal, addPin } = useContext(AppContext);

  const handleCancelClick = () => {
    setModal({
      show: false,
      type: '',
      data: {},
    });
  };

  const handleCreateMarker = () => {
    addPin({
      title,
      geometry: modal.data.geometry,
    });
    handleCancelClick();
  };

  return (
    <div className={styles.pinFormContainer}>
      <div className={styles.titleContainer}>
        Add Marker
        <FontAwesomeIcon icon={faMapMarkerAlt} className={styles.markerIcon} />
      </div>
      <form className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <label htmlFor="pin-title">Marker Title:</label>
          <input
            id="pin-title"
            type="text"
            value={title}
            placeholder="Marker title"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.buttonsContainer}>
          <button type="button" onClick={handleCreateMarker}>Create Marker</button>
          <button type="button" onClick={handleCancelClick}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default PinForm;
