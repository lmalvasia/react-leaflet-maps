import React from 'react';
import styles from './App.module.css';
import MapContainer from './MapContainer/MapContainer';
import LeftPanel from './LeftPanel/LeftPanel';
import { AppProvider } from './AppContext';

const App = () => (
  <AppProvider>
    <div className={styles.header}>React Leaflet Maps</div>
    <div className={styles.bodyContainer}>
      <div className={styles.leftPanel}>
        <LeftPanel />
      </div>
      <div className={styles.map}>
        <MapContainer />
      </div>
    </div>
  </AppProvider>
);

export default App;
