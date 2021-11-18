import React, { useState } from 'react';
import { observer } from "mobx-react";
import { ChoroplethMap } from '../../lib/korea-map-visualization';

import useWindowDimensions from 'window-dimensions';

let dummyData = [
  { regionCode: '11', level: 1 },
  { regionCode: '26', level: 2 },
  { regionCode: '27', level: 3 },
  { regionCode: '28', level: 2 },
  { regionCode: '29', level: 1 },
  { regionCode: '30', level: 4 },
  { regionCode: '31', level: 3 },
  { regionCode: '36', level: 1 },
  { regionCode: '41', level: 2 },
  { regionCode: '42', level: 1 },
  { regionCode: '43', level: 1 },
  { regionCode: '44', level: 2 },
  { regionCode: '45', level: 1 },
  { regionCode: '46', level: 3 },
  { regionCode: '47', level: 1 },
  { regionCode: '48', level: 2 },
  { regionCode: '50', level: 1 },
  { regionCode: '11110', level: 2 },
  { regionCode: '11140', level: 1 },
  { regionCode: '11500', level: 3 },
  { regionCode: '48740', level: 2 },
];

let dummyColors = [
  { color: 'skyblue', level: 1 },
  { color: 'blue', level: 2 },
  { color: '#000066', level: 3 },
];

const VMap = observer(({}) => {
  const {height, width } = useWindowDimensions();
  
  return (
    <div style={{ height: '90vh', width: '100%' }}>
      <ChoroplethMap 
        data={dummyData}
        colors={dummyColors}
        isRegionNameVisible={true}
      />
  </div>
	)
});

export default VMap;




