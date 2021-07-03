import React, { useContext } from 'react';
import { AppContext } from '../AppContext';
import PinMarker from './PinMarker';

const PinMarkerList = () => {
  const { pinList } = useContext(AppContext);
  return (
    <>
      {pinList.map((pin, index) => (
        <PinMarker pin={pin} index={index} />
      ))}
    </>
  );
};

export default PinMarkerList;
