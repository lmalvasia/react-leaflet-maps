import React, { useContext, useState } from 'react';
import { faEdit, faMapMarkerAlt, faSave } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IPin } from '../../types/Pin';
import styles from './PinMarker.module.css';
import { AppContext } from '../AppContext';

interface IPinMarkerProps {
  pin: IPin;
  index: number;
}

const PinMarker: React.FC<IPinMarkerProps> = ({
  pin,
  index,
}) => {
  const { isEditingPin, setIsEditingPing, editPin } = useContext(AppContext);
  const [newTitle, setNewTitle] = useState<string>(pin.title || '');

  const handleSaveClick = () => {
    setIsEditingPing(false);
    editPin({
      ...pin,
      title: newTitle,
    }, index);
  };

  return (
    <div className={styles.pinContainer}>
      <FontAwesomeIcon icon={faMapMarkerAlt} />
      {!isEditingPin ? (
        <>
          <span>{pin.title}</span>
          <FontAwesomeIcon icon={faEdit} onClick={() => setIsEditingPing(true)} />
        </>
      ) : (
        <>
          <input type="text" onChange={(e) => setNewTitle(e.target.value)} value={newTitle} />
          <FontAwesomeIcon icon={faSave} onClick={() => handleSaveClick()} />
        </>
      )}
    </div>
  );
};

export default PinMarker;
