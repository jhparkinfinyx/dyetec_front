import React, { useEffect, useState, useCallback, useRef } from 'react';
import { observer } from "mobx-react";

import { Chart } from "react-google-charts";

import useStore from '../../stores/useStore';

const data = [
  [
    { 
      type: 'date', 
      // label: '월' 
    },
    '중구',
    '동구',
    '북구',
    '서구',
  ],
  [new Date(2021, 1), 1, 37.8, 80.8, 41.8],
  [new Date(2021, 2), 2, 30.9, 69.5, 32.4],
  [new Date(2021, 3), 3, 25.4, 57, 25.7],
  [new Date(2021, 4), 4, 11.7, 18.8, 10.5],
  [new Date(2021, 5), 5, 11.9, 17.6, 10.4],
  [new Date(2021, 6), 6, 8.8, 13.6, 7.7],
  [new Date(2021, 7), 7, 7.6, 12.3, 9.6],
  [new Date(2021, 8), 8, 12.3, 29.2, 10.6],
  [new Date(2021, 9), 9, 16.9, 42.9, 14.8],
  [new Date(2021, 10), 10, 12.8, 30.9, 11.6],
  [new Date(2021, 11), 11, 5.3, 7.9, 4.7],
  [new Date(2021, 12), 12, 6.6, 8.4, 5.2],
]

const options = {
  chart: {
    // title: '구/군별 비교 그래프',
    // subtitle: '구・군별 변화 추이',
  },
  // hAxis: {
  //   title: 'Time',
  // },
  // vAxis: {
  //   title: 'Popularity',
  // },
  series: {
    // 0: { axis: '%' },
  },
}




const MyBarChart = observer(({}) => {
  const { oldDataStore } = useStore();
  const data = oldDataStore.getGeoData;

  const barData = [
    ['지역', '어르신 수', '노후 아파트 수'],
  ]

  data.map(function(value, idx, arr) {
    barData.push([value.state, value.population, value.total,])
  });

  const options = {
    title: '지역별 통계',
    chartArea: { width: '50%' },
    hAxis: {
      title: 'Total Population',
      minValue: 0,
    },
    vAxis: {
      title: '지역',
    }
  };

  return (
    <div>
      {/* <text>{oldDataStore.getFilterTitle} 연간 변화 추이</text> */}
      <div style={{textAlign: "center"}}>어르신 대비 노후 아파트 비교</div>
      <div className={"my-pretty-chart-container"}>
      <Chart
        width={'100%'}
        height={'400px'}
        chartType="Bar"
        loader={<div>데이터 불러오는중..</div>}
        data={barData}
        // options={}
        // For tests
        rootProps={{ 'data-testid': '1' }}
      />
      </div>
    </div>
    
	)
});

export default MyBarChart;
