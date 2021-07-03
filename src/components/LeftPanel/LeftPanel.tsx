import React from 'react';
import PinMarkerList from '../PinMarkerList/PinMarkerList';
import ExpandingSection from '../SharedComponents/ExpandingSection/ExpandingSection';

const LeftPanel = () => (
  <>
    <ExpandingSection label="Pins">
      <PinMarkerList />
    </ExpandingSection>
    <ExpandingSection label="Regions">
      <div>
        Regions
      </div>
    </ExpandingSection>
  </>
);

export default LeftPanel;
