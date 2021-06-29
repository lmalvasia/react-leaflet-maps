import * as L from 'leaflet';
import { Geometry } from './GeoJSON';

export interface IPinFeatureGroup {
  pinsFeatureGroup: L.FeatureGroup,
  updatePins: (newPins: IPin[]) => void;
}

export interface IPin {
  geometry: Geometry;
  title?: string;
};
