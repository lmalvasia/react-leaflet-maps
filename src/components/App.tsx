import React from 'react';
import styles from './App.module.css';
import Map from './Map/Map';
import LeftPanel from './LeftPanel/LeftPanel';

const App = () => (
  <>
    <div className={styles.header}>React Leaflet Maps</div>
    <div className={styles.bodyContainer}>
      <div className={styles.leftPanel}>
        <LeftPanel />
      </div>
      <div className={styles.map}>
        <Map />
      </div>
    </div>
  </>
);

export default App;
