import React, { useContext } from 'react';
import Map from '../Map/Map';
import { AppContext } from '../AppContext';

const MapContainer = () => {
  const { pinList, addPin, setModal } = useContext(AppContext);

  return (
    <Map
      pinList={pinList}
      addPin={addPin}
      setModal={setModal}
    />
  );
};

export default MapContainer;
