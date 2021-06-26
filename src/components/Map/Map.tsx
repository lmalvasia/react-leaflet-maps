import React from 'react';
import * as L from 'leaflet';
import 'leaflet-draw';
import 'leaflet-draw/dist/leaflet.draw-src.css';
import styles from './Map.module.css';

// eslint-disable-next-line react/prefer-stateless-function
export default class Map extends React.Component {
  leafletMap: L.Map | null = null;

  componentDidMount() {
    this.leafletMap = new L.Map('map', {
      center: new L.LatLng(-33.13264154, -60.80624956),
      zoom: 15,
      maxZoom: 20,
    });
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.leafletMap);
    const drawingFeatureGroup = new L.FeatureGroup().addTo(this.leafletMap);
    const drawControl = new L.Control.Draw({
      edit: {
        featureGroup: drawingFeatureGroup,
      },
    });
    this.leafletMap.addControl(drawControl);

    this.leafletMap.on(L.Draw.Event.CREATED, (e) => {
      const { layer } = e;
      drawingFeatureGroup.addLayer(layer);
    });
  }

  componentWillUnmount() {
    this.leafletMap?.off(L.Draw.Event.CREATED);
  }

  render() {
    return (
      <div id="map" className={styles.leafletMap} />
    );
  }
}
