import React, { useContext } from 'react';
import Map from '../Map/Map';
import { AppContext } from '../AppContext';

const MapContainer = () => {
  const { pinList, addPin } = useContext(AppContext);

  return (
    <Map
      pinList={pinList}
      addPin={addPin}
    />
  );
};

export default MapContainer;
