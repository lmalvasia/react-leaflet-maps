import * as L from 'leaflet';
import 'leaflet-draw';
import { Point } from '../types/GeoJSON';
import { IPin, IPinFeatureGroup } from '../types/Pin';

interface IGetPinsFeatureGroupProps {
  leafletMap: L.Map;
}

const renderPin = (pinsFeatureGroup: L.FeatureGroup, pin: IPin) => {
  const { coordinates } = pin.geometry as Point;
  const latLng = L.latLng(coordinates[1], coordinates[0]);
  const pinMarker = L.marker(latLng);
  pinsFeatureGroup.addLayer(pinMarker);
};

const renderPins = (pinsFeatureGroup: L.FeatureGroup, pins: IPin[]) => {
  pins.forEach((pin) => renderPin(pinsFeatureGroup, pin));
};

const getUpdatePins = (pinsFeatureGroup: L.FeatureGroup) => {
  let pins = null;
  return (newPins: IPin[]) => {
    pins = newPins;
    pinsFeatureGroup.clearLayers();
    renderPins(pinsFeatureGroup, pins);
  };
};

const getPinsFeatureGroup = ({
  leafletMap,
}: IGetPinsFeatureGroupProps): IPinFeatureGroup => {
  const pinsFeatureGroup = new L.FeatureGroup().addTo(leafletMap);

  return {
    pinsFeatureGroup,
    updatePins: (newPins: IPin[]) => getUpdatePins(pinsFeatureGroup)(newPins),
  };
};

export default getPinsFeatureGroup;
