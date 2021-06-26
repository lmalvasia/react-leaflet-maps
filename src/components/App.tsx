import React from 'react';
import styles from './App.module.css';

const App = () => (
  <>
    <div className={styles.header}>React Leaflet Maps</div>
    <div className={styles.bodyContainer}>
      <div className={styles.leftPanel}>Left panel</div>
      <div className={styles.map}>Map</div>
    </div>
  </>
);

export default App;
