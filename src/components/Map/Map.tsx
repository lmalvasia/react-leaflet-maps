import React, { Dispatch, SetStateAction } from 'react';
import * as L from 'leaflet';
import 'leaflet-draw';
import 'leaflet-draw/dist/leaflet.draw-src.css';
import isEqual from 'lodash.isequal';
import getPinsFeatureGroup from '../../utils/pinsFeatureGroup';
import { IPin, IPinFeatureGroup } from '../../types/Pin';
import styles from './Map.module.css';
import IModal from '../../types/Modal';
import ModalEnums from '../../enums/Modal';

interface IMapProps {
  pinList: IPin[],
  addPin: (pin: IPin) => void;
  setModal: Dispatch<SetStateAction<IModal>>;
}

// eslint-disable-next-line react/prefer-stateless-function
export default class Map extends React.Component<IMapProps> {
  leafletMap: L.Map | null = null;
  pinsFeatureGroup: IPinFeatureGroup| null = null;
  drawingFeatureGroup: L.FeatureGroup | null = null;

  componentDidMount() {
    // Set leaflet map
    this.leafletMap = new L.Map('map', {
      center: new L.LatLng(-33.13264154, -60.80624956),
      zoom: 15,
      maxZoom: 20,
    });
    // Add tile layer to map
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.leafletMap);
    // Create drawing feature group and add to map
    this.drawingFeatureGroup = new L.FeatureGroup().addTo(this.leafletMap);
    // Create draw control and add to map
    const drawControl = new L.Control.Draw({
      edit: {
        featureGroup: this.drawingFeatureGroup,
      },
    });
    this.leafletMap.addControl(drawControl);
    // Drawing events
    this.leafletMap.on(L.Draw.Event.CREATED, (e) => {
      const { setModal } = this.props;
      const { layerType, layer } = e as L.DrawEvents.Created;

      if (layerType === 'marker') {
        const geoJSON = layer.toGeoJSON();
        setModal({
          show: true,
          type: ModalEnums.PIN_MODAL,
          data: {
            geometry: geoJSON.geometry,
          },
        });
      }
    });
    // Create pins feature group
    this.pinsFeatureGroup = getPinsFeatureGroup({
      leafletMap: this.leafletMap,
    });
  }

  componentDidUpdate(prevProps: IMapProps) {
    this.updateLeafletMap(prevProps);
  }

  componentWillUnmount() {
    this.leafletMap?.off(L.Draw.Event.CREATED);
    this.leafletMap = null;
    this.pinsFeatureGroup = null;
  }

  updateLeafletMap(prevProps: IMapProps) {
    const { pinList } = this.props;
    if (!isEqual(prevProps.pinList, pinList)) {
      this.pinsFeatureGroup && this.pinsFeatureGroup.updatePins(
        pinList,
      );
    }
  }

  render() {
    return (
      <div id="map" className={styles.leafletMap} />
    );
  }
}
