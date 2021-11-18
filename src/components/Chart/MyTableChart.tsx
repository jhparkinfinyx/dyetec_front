import React, { useEffect, useState, useCallback, useRef } from 'react';
import { observer } from "mobx-react";

import { Chart } from "react-google-charts";

import useStore from 'stores/useStore';

const data = [
  [
    { type: 'string', label: '지역' },
    { type: 'number', label: '어르신 ' },
    { type: 'number', label: '노후 아파트 수' },
    { type: 'number', label: '어르신 비율(%)' },
    { type: 'number', label: '노후 아파트 비율(%)' },
  ],
  ['중구', 10000, 10000, {v:30, f: '30%'}, {v:30, f: '30%'}],
  ['동구', 8000, 18000, {v:30, f: '30%'}, {v:30, f: '30%'}],
  ['북구', 12500, 112500, {v:30, f: '30%'}, {v:30, f: '30%'}],
  ['서구', 7000, 17000, {v:30, f: '30%'}, {v:30, f: '30%'}],
]

// const options = {
//   showRowNumber: false,
// }



const MyTableChart = observer(({}) => {
  const { oldDataStore } = useStore();
  const data = oldDataStore.getGeoData;

  let tableData = [
    [
      { type: 'string', label: '지역' },
      { type: 'number', label: '어르신 수' },
      { type: 'number', label: '노후 아파트 수' },
    ],
  ];

  data.map(function(value, idx, arr) {
    tableData.push([value.state, value.population, value.total,])
  });
  
  return (
    <div className={"my-pretty-chart-container"}>
        <Chart
          width="100%%"
          height="100%"
          chartType="Table"
          // loader={<div>c 로딩중..</div>}
          data={tableData}
          // options={options}
          legendToggle
          // rootProps={{ 'data-testid': '3' }}
        />
      </div>
    
	)
});

export default MyTableChart;
